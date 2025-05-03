
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";

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
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center group">
              <span className={`text-2xl font-serif font-bold ${scrolled ? 'text-accountax-800' : 'text-white'} transition-colors duration-300 flex items-center`}>
                <span className="relative z-10 animate-wiggle">High</span>
                <span className="text-accountax-400">street</span>
                <span className={`ml-1 relative ${scrolled ? 'text-accountax-600' : 'text-accountax-300'}`}>
                  Accountax
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accountax-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </span>
              </span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-accountax-500 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-accountax-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  scrolled ? 'text-accountax-800' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-accountax-500 hover:bg-accountax-600 text-white shadow-lg hover:shadow-xl hover:shadow-accountax-500/20 transition-all">
              <span>Free Consultation</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </nav>
          
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className={`${scrolled ? 'text-accountax-800' : 'text-white'} hover:text-accountax-500`}
            >
              {isMenuOpen ? <X size={24} className="animate-fade-in-up" /> : <Menu size={24} className="animate-fade-in-up" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-accountax-100/20 animate-slide-in-bottom">
          <div className="container mx-auto px-4 py-5 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="block text-accountax-800 hover:text-accountax-500 font-medium transition-colors py-2 border-b border-accountax-100/20 animate-slide-in-bottom"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-accountax-500 hover:bg-accountax-600 text-white animate-slide-in-bottom" style={{ animationDelay: '0.25s' }}>
              Free Consultation
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
