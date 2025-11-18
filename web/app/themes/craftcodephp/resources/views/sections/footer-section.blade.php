<?php
$footerColumns = [
    [
        'title' => 'WHAT WE DO',
        'items' => [
            'Developer as a service',
            'Team as a service',
            'Coaching and Guidance',
        ],
    ],
    [
        'title' => 'SOLUTIONS',
        'items' => [
            'Architecture',
            'Front-end Development',
            'Back-end Development',
            'Integration',
        ],
    ],
    [
        'title' => 'ABOUT US',
        'items' => [
            'Who are we',
            'Careers',
            'Internships',
        ],
    ],
    [
        'title' => 'INSIGHTS',
        'items' => [
            'Blogs',
            'Webinars',
            'Whitepapers',
        ],
    ],
    [
        'title' => 'FEEL FREE TO REACH OUT',
        'items' => [
            '+32 (0)3 451 24 77',
            'info@craftcode.be',
            '',
            "Prins Boudewijnlaan 43\n2650 Edegem",
        ],
    ],
];

$socialLinks = [
    [
        'label' => 'Facebook',
        'href' => 'https://www.facebook.com/craftcode',
        'svg' => '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.598 4.625H10.5L10.187 7H8.598V13.125H5.812V7H4.25V4.625H5.812V3.1105C5.812 1.4855 6.6935 0.5625 8.598 0.5625H10.187V2.9375H9.3505C8.791 2.9375 8.598 3.1355 8.598 3.5845V4.625Z" fill="#010326"/></svg>',
    ],
    [
        'label' => 'LinkedIn',
        'href' => 'https://www.linkedin.com/company/craftcode',
        'svg' => '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.062 5.25H5.687V6.3295H5.724C6.0885 5.6395 6.915 4.9165 8.2105 4.9165C11.0235 4.9165 11.563 6.757 11.563 9.1345V13.125H8.938V9.665C8.938 8.8325 8.9225 7.7625 7.7685 7.7625C6.596 7.7625 6.409 8.664 6.409 9.6045V13.125H3.784V5.25H3.062ZM1.438 0.875C2.277 0.875 2.9375 1.5355 2.9375 2.375C2.9375 3.214 2.277 3.875 1.438 3.875C0.5985 3.875 -0.0625 3.214 -0.0625 2.375C-0.0625 1.5355 0.5985 0.875 1.438 0.875ZM2.812 13.125H0.0625V5.25H2.812V13.125Z" fill="#010326"/></svg>',
    ],
    [
        'label' => 'Instagram',
        'href' => 'https://www.instagram.com/craftcode',
        'svg' => '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99996 4.3125C5.51096 4.3125 4.31246 5.511 4.31246 6.99999C4.31246 8.489 5.51096 9.6875 6.99996 9.6875C8.489 9.6875 9.68746 8.489 9.68746 6.99999C9.68746 5.511 8.489 4.3125 6.99996 4.3125ZM6.99996 8.5625C5.98646 8.5625 5.12496 7.701 5.12496 6.6875C5.12496 5.674 5.98646 4.8125 6.99996 4.8125C8.01346 4.8125 8.87496 5.674 8.87496 6.6875C8.87496 7.701 8.01346 8.5625 6.99996 8.5625ZM11.3749 4.15849C11.3749 4.54749 11.059 4.86349 10.67 4.86349C10.2809 4.86349 9.96497 4.54749 9.96497 4.15849C9.96497 3.76949 10.2809 3.45349 10.67 3.45349C11.059 3.45349 11.3749 3.76949 11.3749 4.15849ZM13.9999 6.99999C13.9999 10.865 10.8649 14 6.99996 14C3.13496 14 -0.00012207 10.865 -0.00012207 6.99999C-0.00012207 3.135 3.13496 0 6.99996 0C10.8649 0 13.9999 3.135 13.9999 6.99999ZM12.7499 6.99999C12.7499 4.45149 9.54846 1.25001 6.99996 1.25001C4.45146 1.25001 1.24996 4.45149 1.24996 6.99999C1.24996 9.54849 4.45146 12.75 6.99996 12.75C9.54846 12.75 12.7499 9.54849 12.7499 6.99999Z" fill="#010326"/></svg>',
    ],
];

$certifications = [
    '/app/themes/craftcodephp/resources/images/group-1000005874.png',
    '/app/themes/craftcodephp/resources/images/group-1000005875.png',
    '/app/themes/craftcodephp/resources/images/group-1000005876.png',
    '/app/themes/craftcodephp/resources/images/group-1000005843.png',
];
?>

<section class="relative w-full">
    <div class="relative rounded-[20px]" style="background-color: #f9fafb; padding-top: 4rem; padding-bottom: 3rem;">
        <div class="relative z-10 mx-auto" style="max-width: 1200px; padding: 0 2.5rem;">
            <div class="grid" style="
                display: grid;
                grid-template-columns: repeat(5, minmax(0, 1fr));
                gap: 2.5rem;
            ">
                <?php foreach ($footerColumns as $column): ?>
                    <div class="flex flex-col items-start" style="gap: 0.75rem;">
                        <div style="
                            font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                            font-size: 0.75rem;
                            font-weight: 600;
                            letter-spacing: 0.12em;
                            color: #6b7280;
                            text-transform: uppercase;
                        ">
                            <?= esc_html($column['title']); ?>
                        </div>
                        <div class="flex flex-col items-start w-full" style="gap: 0.5rem;">
                            <?php foreach ($column['items'] as $item): ?>
                                <div class="whitespace-pre-line" style="
                                    font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                                    font-size: 0.875rem;
                                    font-weight: 500;
                                    color: #010326;
                                    opacity: <?= trim($item) === '' ? '0' : '0.85'; ?>;
                                    line-height: 1.6;
                                ">
                                    <?= nl2br(esc_html($item)); ?>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>

   
    <div class="w-full flex items-center justify-between flex-wrap" style="
        min-height: 80px;
        background-color: #010326;
        padding: 1.5rem 2.5rem;
        gap: 1.5rem;
        border-radius: 24px 24px 0 0;
        width: 95%;
        margin: 0 auto;
    ">
        <div class="flex items-center text-center md:text-left" style="gap: 1.5rem;">
            <img
                class="w-[132px] h-7"
                alt="CraftCode Logo"
                src="/app/themes/craftcodephp/resources/images/logo-color-2.png"
            />
            <div style="
                font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                font-size: 0.75rem;
                font-weight: 500;
                color: #ffffffcc;
                line-height: 1.5;
            ">
                Copyright © <?= esc_html(date('Y')); ?> | All rights reserved | Part of the Fieldside group
            </div>
        </div>
        <div style="
            font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            font-size: 0.75rem;
            font-weight: 500;
            color: #ffffffcc;
            line-height: 1.5;
        ">
            Privacy statement | Cookie policy
        </div>
    </div>
</section>

