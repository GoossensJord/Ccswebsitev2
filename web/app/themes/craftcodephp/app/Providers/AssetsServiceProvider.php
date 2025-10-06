<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Roots\Acorn\Assets\Contracts\Asset;
use Roots\Acorn\Assets\Contracts\Manifest;

class AssetsServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        // Add Vite development server URL for assets
        if (app()->environment('local')) {
            add_action('wp_head', function () {
                echo '<script type="module" src="http://localhost:5173/@vite/client"></script>';
            });
        }

        // Enqueue theme stylesheet
        add_action('wp_enqueue_scripts', function () {
            if (file_exists($manifest = get_theme_file_path('public/build/manifest.json'))) {
                $manifest = json_decode(file_get_contents($manifest), true);
                
                if (isset($manifest['resources/css/app.css'])) {
                    wp_enqueue_style('sage/app', get_theme_file_uri('public/build/' . $manifest['resources/css/app.css']['file']));
                }
                
                if (isset($manifest['resources/js/app.js'])) {
                    wp_enqueue_script('sage/app', get_theme_file_uri('public/build/' . $manifest['resources/js/app.js']['file']));
                }
            }
        });
    }
}