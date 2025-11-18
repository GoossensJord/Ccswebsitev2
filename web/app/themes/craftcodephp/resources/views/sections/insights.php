<?php
/**
 * Insights Section (Call to Action)
 * Extracted from InsightsSection.tsx React component
 */
?>

<section class="relative rounded-[20px_20px_60px_20px] mb-24"
         style="
            background-color: #0039a6;
            margin: 3rem 1rem 0 1rem;
            padding: 6rem 0;
         ">
    <img
        class="absolute inset-0 w-full h-full object-cover rounded-[20px_20px_60px_20px]"
        alt="Mask group"
        src="/app/themes/craftcodephp/resources/images/mask-group.png"
        style="width: 100%; height: 100%; object-fit: cover;"
    />
    <div class="relative z-10 text-center mx-auto"
         style="
            max-width: 896px;
            padding: 0 1rem;
         ">
        <h2 class="lg:text-5xl" style="
            font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            font-size: 2.75rem;
            font-weight: 700;
            color: white;
            line-height: 1.2;
            margin-bottom: 1.5rem;
        ">
            Let's build the future together
        </h2>
        <p style="
            font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            font-size: 1.125rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.75;
            text-align: center;
            margin: 0 auto 2rem auto;
        ">
            Ready to take your digital ambitions to the next level?<br />
            Let's collaborate and create something exceptional.
        </p>
        <button class="hover:bg-[#0156ff]/90 rounded-lg btn-primary"
                style="
                    background-color: #0156ff;
                    color: white;
                    font-weight: bold;
                    padding: 0.75rem 2rem;
                    border: none;
                    cursor: pointer;
                    transition: all 0.2s ease;
                ">
            <span style="
                font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                font-size: 0.875rem;
                font-weight: 500;
                color: white;
            ">Let's talk</span>
        </button>
    </div>
</section>

