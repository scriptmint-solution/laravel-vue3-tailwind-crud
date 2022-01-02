<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $uuid = $this->route('role');

        return [
            'name' => ['required', 'min:2', 'max:100', Rule::unique('projects')->ignore($uuid)],
            'description' => 'nullable|max:1000'
        ];
    }
}
