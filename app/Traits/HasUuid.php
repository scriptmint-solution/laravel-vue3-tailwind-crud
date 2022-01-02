<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

trait HasUuid
{
    public static $fake_uuid = null;

    public function getRouteKeyName()
    {
        return 'uuid';
    }

    public static function bootHasUuid()
    {
        static::creating(function (Model $model) {
            $model->uuid = static::$fake_uuid ?? (string) Str::uuid();
        });
    }
}
