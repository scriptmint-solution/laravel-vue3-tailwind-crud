<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Laravel, VueJS, Tailwind SPA CRUD designed with love by ScriptMint">
        <meta name="author" content="ScriptMint">
        <title>Laravel, VueJS, Tailwind SPA CRUD</title>
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <link rel="icon" href="/images/favicon.ico" type="image/png">

        <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
        <link href="{{ mix('/css/plugins.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="root" class="theme-default">
            <router-view></router-view>
        </div>
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
