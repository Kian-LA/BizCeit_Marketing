import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-16 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold text-lime-400 mb-4 block">
              BIZCEIT
            </Link>
            <p className="text-slate-400 mb-4">
              Creating digital experiences that captivate and convert.
            </p>
            <div className="text-slate-500 text-sm">
              © 2024 BIZCEIT. All rights reserved.
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/services" className="hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Brand Design</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">No-Code Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-slate-400">
              <p>hello@bizceit.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;