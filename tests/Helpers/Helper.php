<?php

namespace Tests\Helpers;

use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;

class Helper
{
    const PAGINATION_KEYS = ['data', 'meta', 'links'];

    public static function getResponseContent($response, $body = null)
    {
        $content = json_decode($response->getContent(), true);

        return $body ? Arr::get($content, $body) : $content;
    }
}
