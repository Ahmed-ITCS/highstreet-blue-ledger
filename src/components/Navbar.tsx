
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-serif font-bold text-accountax-800 relative group">
                Highstreet 
                <span className="text-accountax-500">
                  Accountax
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-accountax-500 group-hover:w-full transition-all duration-300"></span>
                </span>
              </span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-accountax-800 hover:text-accountax-500 font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accountax-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-accountax-500 hover:bg-accountax-600 shadow-md shadow-accountax-500/20 hover:shadow-lg hover:shadow-accountax-500/30 transition-all">Get Started</Button>
          </nav>
          
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-accountax-800 hover:text-accountax-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-5 space-y-3 bg-white border-t animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="block text-accountax-800 hover:text-accountax-500 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-accountax-500 hover:bg-accountax-600 shadow-md shadow-accountax-500/10 transition-all">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
