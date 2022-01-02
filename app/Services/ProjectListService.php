<?php

namespace App\Services;

use App\Http\Resources\ProjectCollection;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectListService
{

    public function paginate(Request $request) : ProjectCollection
    {
        return new ProjectCollection(Project::query()
            ->orderBy('created_at', 'desc')
            ->paginate(20, ['*'], 'current_page'));
    }
}
