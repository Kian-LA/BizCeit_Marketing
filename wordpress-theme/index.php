<?php get_header(); ?>

<main id="main" class="site-main">
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <div class="hero-content">
                <p class="hero-tagline">
                    <span class="tagline-dot"></span>
                    LET THE AGENCY ELEVATE YOUR BRAND
                </p>
                <h1 class="hero-title">
                    Our <span class="highlight">Proven Automation Platform</span> Captures and Converts Clients on AutoPilot, Results in 72 Hours Or You Pay Nothing.
                </h1>
                <p class="hero-subtitle">
                    We create digital experiences that captivate audiences and drive results. From stunning websites to powerful brand identities, we bring your vision to life.
                </p>
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="cta-button">
                    Get Started
                </a>
            </div>

            <div class="hero-image">
                <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                     alt="Professional team working in modern office">
            </div>
        </div>
    </section>

    <!-- Client Logos -->
    <section class="section section-dark">
        <div class="container">
            <div class="client-logos">
                <div class="logo-item">bento</div>
                <div class="logo-item">zerod</div>
                <div class="logo-item">PUNTO</div>
                <div class="logo-item">dblm</div>
                <div class="logo-item">timobuz</div>
                <div class="logo-item">Propel</div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="section section-light">
        <div class="container">
            <div class="grid grid-2">
                <div class="about-content">
                    <h2 class="section-title text-left">
                        Unforgettable Websites,<br>
                        Brands & Visuals for Bold<br>
                        Visionaries
                    </h2>
                    <p class="about-text">
                        We partner with ambitious entrepreneurs and established businesses to create digital experiences that don't just look stunning—they convert visitors into customers and build lasting brand loyalty.
                    </p>
                    <ul class="feature-list">
                        <li>Strategic brand development</li>
                        <li>Custom web development</li>
                        <li>Performance optimization</li>
                    </ul>
                </div>
                <div class="about-image">
                    <img src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                         alt="Creative workspace with design tools">
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="section section-gray">
        <div class="container">
            <div class="grid grid-3">
                <div class="stat-item text-center">
                    <div class="stat-number">72+</div>
                    <div class="stat-label">Projects Completed</div>
                </div>
                <div class="stat-item text-center">
                    <div class="stat-number">100+</div>
                    <div class="stat-label">Happy Clients</div>
                </div>
                <div class="stat-item text-center">
                    <div class="stat-number">10+</div>
                    <div class="stat-label">Years Experience</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Preview -->
    <section class="section section-light">
        <div class="container">
            <div class="section-header text-center mb-8">
                <h2 class="section-title">Services We Offer</h2>
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('services'))); ?>" class="view-all-link">
                    View All Services →
                </a>
            </div>
            
            <div class="grid grid-2">
                <div class="card card-gray">
                    <h3 class="card-title">UI/UX Design</h3>
                    <p class="card-text">
                        We craft intuitive and engaging user experiences that convert visitors into customers through strategic design thinking.
                    </p>
                </div>
                <div class="card card-gray">
                    <h3 class="card-title">Brand Design</h3>
                    <p class="card-text">
                        Build a memorable brand identity that resonates with your target audience and stands out in the marketplace.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Preview -->
    <section class="section section-dark">
        <div class="container">
            <div class="section-header text-center mb-8">
                <h2 class="section-title">Showcase of Selected Work</h2>
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('portfolio'))); ?>" class="view-all-link text-lime">
                    View Full Portfolio →
                </a>
            </div>
            
            <div class="grid grid-2">
                <div class="portfolio-item">
                    <div class="portfolio-image">
                        <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                             alt="FinTech Startup - Growth Study">
                    </div>
                    <h3 class="portfolio-title">FinTech Startup - Growth Study</h3>
                    <p class="portfolio-category">Strategy & Development</p>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-image">
                        <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                             alt="Creativity - Social Engagement">
                    </div>
                    <h3 class="portfolio-title">Creativity - Social Engagement</h3>
                    <p class="portfolio-category">Brand Design & Marketing</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="section section-light">
        <div class="container">
            <div class="section-header text-center mb-8">
                <h2 class="section-title">What Clients Say About Us</h2>
            </div>
            
            <div class="grid grid-3">
                <div class="card testimonial-card">
                    <div class="testimonial-rating">
                        <span class="rating-number">4.9</span>
                        <div class="stars">★★★★★</div>
                    </div>
                    <p class="testimonial-text">
                        "Working with this team was incredible. They delivered exactly what we needed and exceeded our expectations in every way."
                    </p>
                    <div class="testimonial-author">
                        <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1" 
                             alt="Sarah Johnson" class="author-image">
                        <div class="author-info">
                            <div class="author-name">Sarah Johnson</div>
                            <div class="author-title">CEO, TechStart</div>
                        </div>
                    </div>
                </div>

                <div class="card testimonial-card">
                    <div class="testimonial-rating">
                        <span class="rating-number">4.7</span>
                        <div class="stars">★★★★★</div>
                    </div>
                    <p class="testimonial-text">
                        "The attention to detail and professional approach made all the difference. Our website now converts 3x better than before."
                    </p>
                    <div class="testimonial-author">
                        <img src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1" 
                             alt="Michael Chen" class="author-image">
                        <div class="author-info">
                            <div class="author-name">Michael Chen</div>
                            <div class="author-title">Founder, GrowthCo</div>
                        </div>
                    </div>
                </div>

                <div class="card testimonial-card">
                    <div class="testimonial-rating">
                        <span class="rating-number">4.8</span>
                        <div class="stars">★★★★★</div>
                    </div>
                    <p class="testimonial-text">
                        "Amazing team that truly understands modern design and development. They brought our vision to life perfectly."
                    </p>
                    <div class="testimonial-author">
                        <img src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1" 
                             alt="Emily Rodriguez" class="author-image">
                        <div class="author-info">
                            <div class="author-name">Emily Rodriguez</div>
                            <div class="author-title">Creative Director</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Blog Preview -->
    <section class="section section-dark">
        <div class="container">
            <div class="section-header text-center mb-8">
                <h2 class="section-title">The Studio Journal</h2>
                <p class="section-subtitle">
                    Insights, tips, and stories from our team about design, development, and digital strategy.
                </p>
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('blog'))); ?>" class="view-all-link text-lime">
                    View All Articles →
                </a>
            </div>
            
            <div class="grid grid-3">
                <?php
                $recent_posts = wp_get_recent_posts(array(
                    'numberposts' => 3,
                    'post_status' => 'publish'
                ));
                
                foreach($recent_posts as $post) : ?>
                <article class="blog-card">
                    <div class="blog-image">
                        <?php if(has_post_thumbnail($post['ID'])) : ?>
                            <?php echo get_the_post_thumbnail($post['ID'], 'medium'); ?>
                        <?php else : ?>
                            <img src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                 alt="<?php echo esc_attr($post['post_title']); ?>">
                        <?php endif; ?>
                    </div>
                    <h3 class="blog-title">
                        <a href="<?php echo get_permalink($post['ID']); ?>">
                            <?php echo esc_html($post['post_title']); ?>
                        </a>
                    </h3>
                    <p class="blog-excerpt">
                        <?php echo wp_trim_words($post['post_content'], 20); ?>
                    </p>
                    <div class="blog-meta">
                        <span><?php echo get_the_date('M j, Y', $post['ID']); ?></span>
                        <span>•</span>
                        <span><?php echo reading_time($post['post_content']); ?> min read</span>
                    </div>
                </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>