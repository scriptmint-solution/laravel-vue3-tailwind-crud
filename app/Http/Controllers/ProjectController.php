<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use App\Services\ProjectListService;
use App\Services\ProjectService;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index(Request $request, ProjectListService $service)
    {
        return $service->paginate($request);
    }

    public function store(ProjectRequest $request, ProjectService $service)
    {
        $project = $service->create($request);

        return $this->success([
            'message' => 'Project created.',
            'project' => new ProjectResource($project)
        ]);
    }

    public function show(Project $project) : ProjectResource
    {
        return new ProjectResource($project);
    }

    public function update(ProjectRequest $request, Project $project, ProjectService $service)
    {
        $service->update($project, $request);

        return $this->success(['message' => 'Project updated.']);
    }

    public function destroy(Project $project, ProjectService $service)
    {
        $service->delete($project);

        return $this->success(['message' => 'Project deleted.']);
    }
}
