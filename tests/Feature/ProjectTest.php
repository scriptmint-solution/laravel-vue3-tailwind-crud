<?php

namespace Tests\Feature;

use App\Models\Project;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\Helpers\Helper;
use Tests\TestCase;
use Illuminate\Support\Str;

class ProjectTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /**
     * @test
     */
    public function user_can_list_project()
    {
        $this->listProject()->assertStatus(200)->assertJsonStructure(Helper::PAGINATION_KEYS);
    }

    /**
     * @test
     */
    public function valid_name_is_required()
    {
        $this->create(['name' => ''])->assertStatus(422)->assertJsonValidationErrors(['name']);
        $this->create(['name' => 'a'])->assertStatus(422)->assertJsonValidationErrors(['name']);
        $this->create(['name' => Str::random(501)])->assertStatus(422)->assertJsonValidationErrors(['name']);
    }

    /**
     * @test
     */
    public function user_can_create_project()
    {
        $this->create()->assertStatus(200);
    }

    /**
     * @test
     */
    public function user_can_fetch_project()
    {
        $response = $this->create()->assertStatus(200);

        $this->fetch(Helper::getResponseContent($response, 'project.uuid'))->assertStatus(200);
    }

    /**
     * @test
     */
    public function user_can_update_project()
    {
        $response = $this->create();

        $project_uuid = Helper::getResponseContent($response, 'project.uuid');

        $response = $this->update($project_uuid, array(
            'name' => 'Testing Updated Project'
        ))->assertStatus(200);

        $project = Project::where('uuid', $project_uuid)->first();

        $this->assertEquals('Testing Updated Project', $project->name);
    }

    /**
     * @test
     */
    public function user_can_delete_project()
    {
        $response = $this->create();

        $project_uuid = Helper::getResponseContent($response, 'project.uuid');

        $response = $this->deleteProject($project_uuid)->assertStatus(200);
    }

    private function validFields($attributes = array())
    {
        return array_merge(array(
            'name' => 'Test Project',
            'description' => 'Test Project description'
        ), $attributes);
    }

    private function listProject($data = array())
    {
        return $this->getJson(route('projects.index', $data));
    }

    private function create($attributes = array())
    {
        return $this->postJson(route('projects.store'), $this->validFields($attributes));
    }

    private function fetch($id)
    {
        return $this->getJson(route('projects.show', ['project' => $id]));
    }

    private function update($id, $attributes = array())
    {
        return $this->patchJson(route('projects.update', ['project' => $id]), $this->validFields($attributes));
    }

    private function deleteProject($id)
    {
        return $this->deleteJson(route('projects.destroy', ['project' => $id]));
    }
}
