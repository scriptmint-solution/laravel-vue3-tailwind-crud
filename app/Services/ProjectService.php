<?php

namespace App\Services;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectService
{
    public function create(Request $request) : Project
    {
        return Project::forceCreate($this->formatParams($request));
    }

    private function formatParams(Request $request, ?Project $project = null) : array
    {
        $formatted = [
            'name'        => $request->name,
            'description' => $request->description,
        ];

        return $formatted;
    }

    public function update(Project $project, Request $request) : void
    {
        $project->forceFill($this->formatParams($request, $project))->save();
    }

    public function delete(Project $project) : void
    {
        // Check if deletable

        $project->delete();
    }
}
