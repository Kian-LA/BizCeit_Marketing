<?php get_header(); ?>

<main id="main" class="site-main">
    <section class="hero-section">
        <div class="container">
            <div class="hero-content text-center">
                <h1 class="hero-title">
                    Let's <span class="highlight">Connect</span>
                </h1>
                <p class="hero-subtitle">
                    Ready to transform your digital presence? We'd love to hear about your project and discuss how we can help you achieve your goals.
                </p>
            </div>
        </div>
    </section>

    <section class="section section-light">
        <div class="container">
            <?php if (isset($_GET['contact']) && $_GET['contact'] == 'success') : ?>
                <div class="success-message text-center mb-8">
                    <h2>Thank You!</h2>
                    <p>We've received your message and will get back to you within 24 hours.</p>
                </div>
            <?php elseif (isset($_GET['contact']) && $_GET['contact'] == 'error') : ?>
                <div class="error-message text-center mb-8">
                    <h2>Oops!</h2>
                    <p>There was an error sending your message. Please try again.</p>
                </div>
            <?php endif; ?>

            <div class="grid grid-2">
                <div class="contact-form-section">
                    <h2 class="section-title text-left">Start Your Project</h2>
                    <form method="post" action="" class="contact-form">
                        <div class="grid grid-2">
                            <div class="form-group">
                                <label for="name" class="form-label">Full Name *</label>
                                <input type="text" id="name" name="name" class="form-input" required placeholder="John Doe">
                            </div>
                            <div class="form-group">
                                <label for="email" class="form-label">Email Address *</label>
                                <input type="email" id="email" name="email" class="form-input" required placeholder="john@company.com">
                            </div>
                        </div>

                        <div class="grid grid-2">
                            <div class="form-group">
                                <label for="company" class="form-label">Company</label>
                                <input type="text" id="company" name="company" class="form-input" placeholder="Your Company">
                            </div>
                            <div class="form-group">
                                <label for="phone" class="form-label">Phone Number</label>
                                <input type="tel" id="phone" name="phone" class="form-input" placeholder="+1 (555) 123-4567">
                            </div>
                        </div>

                        <div class="grid grid-2">
                            <div class="form-group">
                                <label for="service" class="form-label">Service Needed *</label>
                                <select id="service" name="service" class="form-select" required>
                                    <option value="">Select a service</option>
                                    <option value="ui-ux-design">UI/UX Design</option>
                                    <option value="brand-design">Brand Design</option>
                                    <option value="web-development">Web Development</option>
                                    <option value="no-code-development">No-Code Development</option>
                                    <option value="full-package">Full Package</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="budget" class="form-label">Project Budget</label>
                                <select id="budget" name="budget" class="form-select">
                                    <option value="">Select budget range</option>
                                    <option value="under-5k">Under $5,000</option>
                                    <option value="5k-10k">$5,000 - $10,000</option>
                                    <option value="10k-25k">$10,000 - $25,000</option>
                                    <option value="25k-50k">$25,000 - $50,000</option>
                                    <option value="50k-plus">$50,000+</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="timeline" class="form-label">Project Timeline</label>
                            <select id="timeline" name="timeline" class="form-select">
                                <option value="">Select timeline</option>
                                <option value="asap">ASAP</option>
                                <option value="1-month">Within 1 month</option>
                                <option value="2-3-months">2-3 months</option>
                                <option value="3-6-months">3-6 months</option>
                                <option value="6-months-plus">6+ months</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="message" class="form-label">Project Details *</label>
                            <textarea id="message" name="message" class="form-textarea" rows="6" required placeholder="Tell us about your project, goals, and any specific requirements..."></textarea>
                        </div>

                        <button type="submit" name="contact_form_submit" class="form-button">
                            Send Message
                        </button>
                    </form>
                </div>

                <div class="contact-info-section">
                    <h2 class="section-title text-left">Get in Touch</h2>
                    
                    <div class="contact-methods">
                        <div class="contact-method">
                            <div class="contact-icon">📧</div>
                            <div class="contact-details">
                                <h3>Email Us</h3>
                                <p>hello@highlevelscaling.com</p>
                                <small>We'll respond within 24 hours</small>
                            </div>
                        </div>

                        <div class="contact-method">
                            <div class="contact-icon">📞</div>
                            <div class="contact-details">
                                <h3>Call Us</h3>
                                <p>+1 (555) 123-4567</p>
                                <small>Mon-Fri, 9AM-6PM PST</small>
                            </div>
                        </div>

                        <div class="contact-method">
                            <div class="contact-icon">📍</div>
                            <div class="contact-details">
                                <h3>Visit Us</h3>
                                <p>123 Design Street<br>San Francisco, CA 94102</p>
                                <small>By appointment only</small>
                            </div>
                        </div>
                    </div>

                    <div class="card card-gray mt-8">
                        <h3>What Happens Next?</h3>
                        <div class="process-steps">
                            <div class="process-step">
                                <span class="step-number">1</span>
                                <span>We review your project details</span>
                            </div>
                            <div class="process-step">
                                <span class="step-number">2</span>
                                <span>Schedule a discovery call</span>
                            </div>
                            <div class="process-step">
                                <span class="step-number">3</span>
                                <span>Receive a custom proposal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>