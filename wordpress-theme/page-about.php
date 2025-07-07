<?php get_header(); ?>

<main id="main" class="site-main">
    <section class="hero-section">
        <div class="container">
            <div class="hero-content text-center">
                <h1 class="hero-title">
                    We're <span class="highlight">BIZCEIT</span>
                </h1>
                <p class="hero-subtitle">
                    A passionate team of designers, developers, and strategists dedicated to creating digital experiences that drive real business results.
                </p>
            </div>
        </div>
    </section>

    <section class="section section-light">
        <div class="container">
            <div class="grid grid-2">
                <div class="mission-content">
                    <h2 class="section-title text-left">Our Mission</h2>
                    <p class="mission-text">
                        We believe that great design isn't just about looking good—it's about solving problems, creating connections, and driving meaningful results for businesses and their customers.
                    </p>
                    <p class="mission-text">
                        Since our founding, we've helped over 100 companies transform their digital presence through strategic design, innovative development, and data-driven optimization.
                    </p>
                    <ul class="feature-list">
                        <li>Results-driven approach</li>
                        <li>Collaborative partnership</li>
                        <li>Award-winning quality</li>
                    </ul>
                </div>
                <div class="mission-image">
                    <img src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                         alt="Team collaboration">
                </div>
            </div>
        </div>
    </section>

    <section class="section section-gray">
        <div class="container">
            <div class="section-header text-center mb-8">
                <h2 class="section-title">Our Values</h2>
                <p class="section-subtitle">
                    These core principles guide everything we do and shape how we work with our clients.
                </p>
            </div>
            
            <div class="grid grid-3">
                <div class="card">
                    <div class="value-icon">🎯</div>
                    <h3 class="card-title">Purpose-Driven</h3>
                    <p class="card-text">
                        Every project starts with understanding your goals and creating solutions that deliver measurable impact.
                    </p>
                </div>

                <div class="card">
                    <div class="value-icon">👥</div>
                    <h3 class="card-title">Collaborative</h3>
                    <p class="card-text">
                        We work as an extension of your team, ensuring transparent communication and shared success.
                    </p>
                </div>

                <div class="card">
                    <div class="value-icon">🏆</div>
                    <h3 class="card-title">Excellence</h3>
                    <p class="card-text">
                        We're committed to delivering exceptional quality in every detail, from concept to completion.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-light">
        <div class="container">
            <div class="section-header text-center mb-8">
                <h2 class="section-title">Meet Our Team</h2>
                <p class="section-subtitle">
                    Talented professionals who bring diverse expertise and fresh perspectives to every project.
                </p>
            </div>
            
            <div class="grid grid-3">
                <div class="team-member text-center">
                    <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" 
                         alt="Sarah Johnson" class="team-image">
                    <h3 class="team-name">Sarah Johnson</h3>
                    <p class="team-role">Creative Director</p>
                    <p class="team-bio">
                        10+ years crafting brand identities and user experiences that resonate with audiences.
                    </p>
                </div>

                <div class="team-member text-center">
                    <img src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" 
                         alt="Michael Chen" class="team-image">
                    <h3 class="team-name">Michael Chen</h3>
                    <p class="team-role">Lead Developer</p>
                    <p class="team-bio">
                        Full-stack developer specializing in modern web technologies and performance optimization.
                    </p>
                </div>

                <div class="team-member text-center">
                    <img src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" 
                         alt="Emily Rodriguez" class="team-image">
                    <h3 class="team-name">Emily Rodriguez</h3>
                    <p class="team-role">Strategy Lead</p>
                    <p class="team-bio">
                        Digital strategist focused on data-driven insights and conversion optimization.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-dark">
        <div class="container text-center">
            <h2 class="section-title">Ready to Work Together?</h2>
            <p class="section-subtitle">
                Let's discuss how we can help bring your vision to life and achieve your business goals.
            </p>
            <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="cta-button">
                Start a Project →
            </a>
        </div>
    </section>
</main>

<?php get_footer(); ?>