const mix = require('laravel-mix');
require('laravel-mix-purgecss');

var plugin =  'resources/plugins/';
const path = require('path');
const webpack = require('webpack');
const tailwindcss = require('tailwindcss');

mix.browserSync({
    proxy: process.env.APP_URL,
    notify: false
});

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })
    .purgeCss({
        content: [
            "node_modules/**/*.vue",
            './resources/**/*.blade.php',
            './resources/**/*.js',
            './resources/**/*.vue',
        ],
        css: [],
        whitelistPatterns: [
            /^Vue-Toastification/,
            /^nprogress/,
            /^vld/,
        ],
        enabled: mix.inProduction()
        // enabled: false
    })
    .combine('resources/plugins/css/*.scss', 'public/css/plugins.css')
    .webpackConfig({
        devtool: "cheap-module-source-map",
        plugins: [],
        resolve: {
            alias: {
                '@sass': path.resolve(__dirname, 'resources', 'sass'),
                '@js': path.resolve(__dirname, 'resources', 'js'),
                '@core': path.resolve(__dirname, 'resources', 'js', 'core'),
                '@routes': path.resolve(__dirname, 'resources', 'js', 'routes'),
                '@stores': path.resolve(__dirname, 'resources', 'js', 'stores'),
                '@views': path.resolve(__dirname, 'resources', 'js', 'views')
            }
        },
        output: {
            chunkFilename: 'js/chunks/[name].js?id=[chunkhash]',
        },
    });

    if (mix.inProduction()) {
        mix.version();
    }
