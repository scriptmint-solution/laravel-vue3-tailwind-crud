const mix = require('laravel-mix');

var plugin =  'resources/plugins/';
const path = require('path');
const webpack = require('webpack');
const tailwindcss = require('tailwindcss');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    .combine('resources/plugins/css/*.scss', 'public/css/plugins.css')
    .copyDirectory('resources/public', 'public')
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
