<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header class="site-header">
    <div class="container">
        <div class="header-content">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="logo">
                BIZCEIT
            </a>
            
            <nav class="main-navigation">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'main-nav',
                    'container' => false,
                    'fallback_cb' => 'default_menu'
                ));
                ?>
            </nav>

            <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="cta-button">
                Get Started
            </a>

            <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">
                ☰
            </button>
        </div>

        <nav class="mobile-nav" id="mobile-nav">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'fallback_cb' => 'default_mobile_menu'
            ));
            ?>
        </nav>
    </div>
</header>

<?php
function default_menu() {
    echo '<ul class="main-nav">
        <li><a href="' . esc_url(get_permalink(get_page_by_path('about'))) . '">About</a></li>
        <li><a href="' . esc_url(get_permalink(get_page_by_path('services'))) . '">Services</a></li>
        <li><a href="' . esc_url(get_permalink(get_page_by_path('portfolio'))) . '">Portfolio</a></li>
        <li><a href="' . esc_url(get_permalink(get_page_by_path('contact'))) . '">Contact</a></li>
        <li><a href="' . esc_url(get_permalink(get_page_by_path('resources'))) . '">Resources</a></li>
        <li><a href="' . esc_url(get_permalink(get_page_by_path('blog'))) . '">Blog</a></li>
    </ul>';
}

function default_mobile_menu() {
    echo '<ul>
        <li><a href="' . esc_url(get_permalink(get_page_by_path('about'))) . '">About</a></li>
        <li><a href="' . esc_url(get_permalink(get_page_by_path('services'))) . '">Services</a></li>
        <li><a href="' . esc_url(get_permalink(get_page_by_path('portfolio'))) . '">Portfolio</a></li>
        <li><a href="' . esc_url(get_permalink(get_page_by_path('contact'))) . '">Contact</a></li>
        <li><a href="' . esc_url(get_permalink(get_page_by_path('resources'))) . '">Resources</a></li>
        <li><a href="' . esc_url(get_permalink(get_page_by_path('blog'))) . '">Blog</a></li>
        <li><a href="' . esc_url(get_permalink(get_page_by_path('contact'))) . '" class="cta-button">Get Started</a></li>
    </ul>';
}
?>

<script>
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    mobileNav.classList.toggle('active');
}
</script>