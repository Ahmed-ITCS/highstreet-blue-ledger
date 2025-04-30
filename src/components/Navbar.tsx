
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
    <header className="sticky top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-serif font-bold text-accountax-800">
                Highstreet <span className="text-accountax-500">Accountax</span>
              </span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-accountax-800 hover:text-accountax-500 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-accountax-500 hover:bg-accountax-600">Get Started</Button>
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
          <div className="px-4 py-5 space-y-3 bg-white border-t">
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
            <Button className="w-full bg-accountax-500 hover:bg-accountax-600">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
