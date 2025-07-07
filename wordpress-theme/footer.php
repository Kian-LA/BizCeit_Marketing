<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-section">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="logo mb-4">
                    BIZCEIT
                </a>
                <p class="footer-description">
                    Creating digital experiences that captivate and convert.
                </p>
                <div class="footer-copyright">
                    © <?php echo date('Y'); ?> BIZCEIT. All rights reserved.
                </div>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul>
                    <li><a href="<?php echo esc_url(get_permalink(get_page_by_path('services'))); ?>">UI/UX Design</a></li>
                    <li><a href="<?php echo esc_url(get_permalink(get_page_by_path('services'))); ?>">Brand Design</a></li>
                    <li><a href="<?php echo esc_url(get_permalink(get_page_by_path('services'))); ?>">Web Development</a></li>
                    <li><a href="<?php echo esc_url(get_permalink(get_page_by_path('services'))); ?>">No-Code Solutions</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Company</h4>
                <ul>
                    <li><a href="<?php echo esc_url(get_permalink(get_page_by_path('about'))); ?>">About</a></li>
                    <li><a href="<?php echo esc_url(get_permalink(get_page_by_path('portfolio'))); ?>">Portfolio</a></li>
                    <li><a href="<?php echo esc_url(get_permalink(get_page_by_path('blog'))); ?>">Blog</a></li>
                    <li><a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>">Contact</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Get in Touch</h4>
                <div class="contact-info">
                    <p>hello@bizceit.com</p>
                    <p>+1 (555) 123-4567</p>
                    <p>San Francisco, CA</p>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>