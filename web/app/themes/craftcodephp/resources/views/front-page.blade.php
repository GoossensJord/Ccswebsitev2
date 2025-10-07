@extends('layouts.app')

<?php
function enqueue_theme_styles() {
    wp_enqueue_style('theme-styles', get_template_directory_uri() . '/public/css/app.css', [], '1.0.0');
}
add_action('wp_enqueue_scripts', 'enqueue_theme_styles');
?>


@section('content')
  <h1>{{ get_the_title() }}</h1>
  <div>{!! get_the_content() !!}</div>
@endsection

@include('sections.nav')
@include('sections.hero')
@include('sections.services')

