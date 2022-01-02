<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
           'uuid'        => $this->uuid,
           'name'        => $this->name,
           'description' => $this->description,
           'created_at'  => $this->created_at->format('d M Y, H:i a'),
           'updated_at'  => $this->updated_at->format('d M Y, H:i a')
        ];
    }
}
