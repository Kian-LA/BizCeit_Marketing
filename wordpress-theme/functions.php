<?php
// Theme setup
function highlevelscaling_theme_setup() {
    // Add theme support for various features
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'highlevelscaling'),
        'footer' => __('Footer Menu', 'highlevelscaling'),
    ));
}
add_action('after_setup_theme', 'highlevelscaling_theme_setup');

// Enqueue styles and scripts
function highlevelscaling_scripts() {
    wp_enqueue_style('highlevelscaling-style', get_stylesheet_uri());
    wp_enqueue_script('highlevelscaling-script', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'highlevelscaling_scripts');

// Custom post types
function create_portfolio_post_type() {
    register_post_type('portfolio',
        array(
            'labels' => array(
                'name' => __('Portfolio'),
                'singular_name' => __('Portfolio Item')
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
            'menu_icon' => 'dashicons-portfolio',
        )
    );
}
add_action('init', 'create_portfolio_post_type');

function create_testimonial_post_type() {
    register_post_type('testimonial',
        array(
            'labels' => array(
                'name' => __('Testimonials'),
                'singular_name' => __('Testimonial')
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail'),
            'menu_icon' => 'dashicons-format-quote',
        )
    );
}
add_action('init', 'create_testimonial_post_type');

// Custom fields for portfolio
function add_portfolio_meta_boxes() {
    add_meta_box(
        'portfolio-details',
        'Portfolio Details',
        'portfolio_details_callback',
        'portfolio'
    );
}
add_action('add_meta_boxes', 'add_portfolio_meta_boxes');

function portfolio_details_callback($post) {
    wp_nonce_field('save_portfolio_details', 'portfolio_nonce');
    
    $category = get_post_meta($post->ID, '_portfolio_category', true);
    $client = get_post_meta($post->ID, '_portfolio_client', true);
    $url = get_post_meta($post->ID, '_portfolio_url', true);
    $tags = get_post_meta($post->ID, '_portfolio_tags', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="portfolio_category">Category</label></th>';
    echo '<td><input type="text" id="portfolio_category" name="portfolio_category" value="' . esc_attr($category) . '" /></td></tr>';
    echo '<tr><th><label for="portfolio_client">Client</label></th>';
    echo '<td><input type="text" id="portfolio_client" name="portfolio_client" value="' . esc_attr($client) . '" /></td></tr>';
    echo '<tr><th><label for="portfolio_url">Project URL</label></th>';
    echo '<td><input type="url" id="portfolio_url" name="portfolio_url" value="' . esc_attr($url) . '" /></td></tr>';
    echo '<tr><th><label for="portfolio_tags">Tags (comma separated)</label></th>';
    echo '<td><input type="text" id="portfolio_tags" name="portfolio_tags" value="' . esc_attr($tags) . '" /></td></tr>';
    echo '</table>';
}

function save_portfolio_details($post_id) {
    if (!isset($_POST['portfolio_nonce']) || !wp_verify_nonce($_POST['portfolio_nonce'], 'save_portfolio_details')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (isset($_POST['portfolio_category'])) {
        update_post_meta($post_id, '_portfolio_category', sanitize_text_field($_POST['portfolio_category']));
    }
    if (isset($_POST['portfolio_client'])) {
        update_post_meta($post_id, '_portfolio_client', sanitize_text_field($_POST['portfolio_client']));
    }
    if (isset($_POST['portfolio_url'])) {
        update_post_meta($post_id, '_portfolio_url', esc_url_raw($_POST['portfolio_url']));
    }
    if (isset($_POST['portfolio_tags'])) {
        update_post_meta($post_id, '_portfolio_tags', sanitize_text_field($_POST['portfolio_tags']));
    }
}
add_action('save_post', 'save_portfolio_details');

// Custom fields for testimonials
function add_testimonial_meta_boxes() {
    add_meta_box(
        'testimonial-details',
        'Testimonial Details',
        'testimonial_details_callback',
        'testimonial'
    );
}
add_action('add_meta_boxes', 'add_testimonial_meta_boxes');

function testimonial_details_callback($post) {
    wp_nonce_field('save_testimonial_details', 'testimonial_nonce');
    
    $author = get_post_meta($post->ID, '_testimonial_author', true);
    $position = get_post_meta($post->ID, '_testimonial_position', true);
    $company = get_post_meta($post->ID, '_testimonial_company', true);
    $rating = get_post_meta($post->ID, '_testimonial_rating', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="testimonial_author">Author Name</label></th>';
    echo '<td><input type="text" id="testimonial_author" name="testimonial_author" value="' . esc_attr($author) . '" /></td></tr>';
    echo '<tr><th><label for="testimonial_position">Position</label></th>';
    echo '<td><input type="text" id="testimonial_position" name="testimonial_position" value="' . esc_attr($position) . '" /></td></tr>';
    echo '<tr><th><label for="testimonial_company">Company</label></th>';
    echo '<td><input type="text" id="testimonial_company" name="testimonial_company" value="' . esc_attr($company) . '" /></td></tr>';
    echo '<tr><th><label for="testimonial_rating">Rating (1-5)</label></th>';
    echo '<td><input type="number" id="testimonial_rating" name="testimonial_rating" min="1" max="5" value="' . esc_attr($rating) . '" /></td></tr>';
    echo '</table>';
}

function save_testimonial_details($post_id) {
    if (!isset($_POST['testimonial_nonce']) || !wp_verify_nonce($_POST['testimonial_nonce'], 'save_testimonial_details')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (isset($_POST['testimonial_author'])) {
        update_post_meta($post_id, '_testimonial_author', sanitize_text_field($_POST['testimonial_author']));
    }
    if (isset($_POST['testimonial_position'])) {
        update_post_meta($post_id, '_testimonial_position', sanitize_text_field($_POST['testimonial_position']));
    }
    if (isset($_POST['testimonial_company'])) {
        update_post_meta($post_id, '_testimonial_company', sanitize_text_field($_POST['testimonial_company']));
    }
    if (isset($_POST['testimonial_rating'])) {
        update_post_meta($post_id, '_testimonial_rating', intval($_POST['testimonial_rating']));
    }
}
add_action('save_post', 'save_testimonial_details');

// Contact form handling
function handle_contact_form() {
    if (isset($_POST['contact_form_submit'])) {
        $name = sanitize_text_field($_POST['name']);
        $email = sanitize_email($_POST['email']);
        $company = sanitize_text_field($_POST['company']);
        $phone = sanitize_text_field($_POST['phone']);
        $service = sanitize_text_field($_POST['service']);
        $budget = sanitize_text_field($_POST['budget']);
        $timeline = sanitize_text_field($_POST['timeline']);
        $message = sanitize_textarea_field($_POST['message']);

        // Send email
        $to = get_option('admin_email');
        $subject = 'New Contact Form Submission from ' . $name;
        $body = "Name: $name\n";
        $body .= "Email: $email\n";
        $body .= "Company: $company\n";
        $body .= "Phone: $phone\n";
        $body .= "Service: $service\n";
        $body .= "Budget: $budget\n";
        $body .= "Timeline: $timeline\n";
        $body .= "Message: $message\n";

        $headers = array('Content-Type: text/html; charset=UTF-8');

        if (wp_mail($to, $subject, $body, $headers)) {
            wp_redirect(add_query_arg('contact', 'success', wp_get_referer()));
            exit;
        } else {
            wp_redirect(add_query_arg('contact', 'error', wp_get_referer()));
            exit;
        }
    }
}
add_action('init', 'handle_contact_form');

// Helper function for reading time
function reading_time($content) {
    $word_count = str_word_count(strip_tags($content));
    $reading_time = ceil($word_count / 200);
    return $reading_time;
}

// Widget areas
function rapidleadworks_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'rapidleadworks'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here.', 'rapidleadworks'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'rapidleadworks_widgets_init');

// Customizer options
function rapidleadworks_customize_register($wp_customize) {
    // Hero section
    $wp_customize->add_section('hero_section', array(
        'title' => __('Hero Section', 'rapidleadworks'),
        'priority' => 30,
    ));

    $wp_customize->add_setting('hero_title', array(
        'default' => 'Never Miss Another Deal Again: The Automated Customer Acquisition System Captures, Converts, and Closes in less than 72 Hours...Or Pay Nothing.',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_title', array(
        'label' => __('Hero Title', 'rapidleadworks'),
        'section' => 'hero_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'We create digital experiences that captivate audiences and drive results.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('hero_subtitle', array(
        'label' => __('Hero Subtitle', 'rapidleadworks'),
        'section' => 'hero_section',
        'type' => 'textarea',
    ));
}
?>