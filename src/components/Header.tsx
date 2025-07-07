import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-lime-400">BIZCEIT</div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-lime-400' : 'text-slate-300 hover:text-white'}`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${isActive('/services') ? 'text-lime-400' : 'text-slate-300 hover:text-white'}`}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className={`transition-colors ${isActive('/portfolio') ? 'text-lime-400' : 'text-slate-300 hover:text-white'}`}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-lime-400' : 'text-slate-300 hover:text-white'}`}
            >
              Contact
            </Link>
            <Link 
              to="/resources" 
              className={`transition-colors ${isActive('/resources') ? 'text-lime-400' : 'text-slate-300 hover:text-white'}`}
            >
              Resources
            </Link>
            <Link 
              to="/blog" 
              className={`transition-colors ${isActive('/blog') ? 'text-lime-400' : 'text-slate-300 hover:text-white'}`}
            >
              Blog
            </Link>
          </nav>

          <Link 
            to="/contact" 
            className="hidden md:block bg-lime-400 text-slate-900 px-6 py-2 rounded-full font-medium hover:bg-lime-300 transition-colors"
          >
            Get Started
          </Link>

          <button 
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 py-4">
            <nav className="flex flex-col space-y-4 px-4">
              <Link 
                to="/about" 
                className={`transition-colors ${isActive('/about') ? 'text-lime-400' : 'text-slate-300 hover:text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`transition-colors ${isActive('/services') ? 'text-lime-400' : 'text-slate-300 hover:text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/portfolio" 
                className={`transition-colors ${isActive('/portfolio') ? 'text-lime-400' : 'text-slate-300 hover:text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors ${isActive('/contact') ? 'text-lime-400' : 'text-slate-300 hover:text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/resources" 
                className={`transition-colors ${isActive('/resources') ? 'text-lime-400' : 'text-slate-300 hover:text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/blog" 
                className={`transition-colors ${isActive('/blog') ? 'text-lime-400' : 'text-slate-300 hover:text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="bg-lime-400 text-slate-900 px-6 py-2 rounded-full font-medium hover:bg-lime-300 transition-colors w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;