@extends('layouts.app')

@section('content')
  <h1>{{ get_the_title() }}</h1>
  <div>{!! get_the_content() !!}</div>
@endsection

<?php
get_header();
?>

<div class="homepage-content ">

    <nav class="flex items-center justify-between relative" style="padding: 24px 48px;">
    <img
        class="w-56 h-12"
        alt="Logo color"
        src="/app/themes/craftcodephp/resources/images/logo-color.png"
    />
    <div class="flex items-center" style="gap: 32px;">
        <div class="flex items-center" style="gap: 8px;">
            <div class="text-center whitespace-nowrap">
                What we do
            </div>
            <img
                class="w-2.5 h-1.5"
                alt="Vector"
                src="/app/themes/craftcodephp/resources/images/vector-1.svg"
            />
        </div>

        <div class="flex items-center" style="gap: 8px;">
            <div class="text-center whitespace-nowrap">
                Solutions
            </div>
            <img
                class="w-2.5 h-1.5"
                alt="Vector"
                src="/app/themes/craftcodephp/resources/images/vector-1.svg"
            />
        </div>

        <div class="flex items-center" style="gap: 8px;">
            <div class="text-center whitespace-nowrap">
                About Us
            </div>
        </div>

        <div class="flex items-center" style="gap: 8px;">
            <div class="text-center whitespace-nowrap" style="color: #0156ff;">
                Careers
            </div>
        </div>

        <button class="h-auto hover:bg-[#0156ff]/90" style="background-color: #0156ff; color: white; padding: 16px 24px;">
            <span>Contact Us</span>
        </button>
    </div>
</nav>

</div>

<?php
get_footer();
?>

<?php
function enqueue_theme_styles() {
    wp_enqueue_style('theme-styles', get_template_directory_uri() . '/public/css/app.css', [], '1.0.0');
}
add_action('wp_enqueue_scripts', 'enqueue_theme_styles');
?>
