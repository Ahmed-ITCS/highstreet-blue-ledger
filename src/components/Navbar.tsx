
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  const services = [
    { name: 'Book Keeping', href: '/services/book-keeping' },
    { name: 'Self Assessment Tax', href: '/services/self-assessment-tax' },
    { name: 'Capital Gains tax ', href: '/services/capital-gains-tax' },
    { name: 'Payroll', href: '/services/payroll' },
    { name: 'Accounts Managment ', href: '/services/accounts-management' },
    { name: 'Cloud Accounting ', href: '/services/cloud-accounting' },
    { name: 'Corporation Tax ', href: '/services/corporation-tax' },
    { name: 'HMRC Tax Investigations', href: '/services/hmrc-tax-investigations' },
    { name: 'Vat Returns', href: '/services/vat-returns' },
    { name: 'Year End Accounts', href: '/services/year-end-accounts' },
    { name: 'Contractor Accountings', href: '/services/contractor-accounting' },
    { name: 'Limited-Liability-Partnerships', href: '/services/limited-liability-partnerships' },

    /*
    { name: 'Tax Advisory', href: '/services/tax-advisory' },
    { name: 'Audit & Assurance', href: '/services/audit-assurance' },
    { name: 'Business Advisory', href: '/services/business-advisory' },
    { name: 'Corporate Finance', href: '/services/corporate-finance' },
    { name: 'Outsourcing', href: '/services/outsourcing' },
    { name: 'International Services', href: '/services/international' },*/
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services', hasDropdown: true, items: services },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="mr-3 w-8 h-8">
                <img src="/lovable-uploads/c61e23a0-1d76-4412-8400-554190f2dd5f.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className={`text-2xl font-serif font-bold ${scrolled ? 'text-accountax-800' : 'text-white'} transition-colors duration-300 flex items-center`}>
                <span className="relative z-10 animate-wiggle">High</span>
                <span className="text-accountax-400">street</span>
                <span className={`ml-1 relative ${scrolled ? 'text-accountax-600' : 'text-accountax-300'}`}>
                  Accountax
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accountax-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className={`font-medium transition-colors hover:text-accountax-500 flex items-center focus:outline-none ${
                    scrolled ? 'text-accountax-800' : 'text-white'
                  }`}>
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-56 bg-white/95 backdrop-blur-md border-accountax-100/20">
                    {link.items?.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link to={item.href} className="cursor-pointer text-accountax-800 hover:text-accountax-500 hover:bg-accountax-50 transition-all">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium transition-colors hover:text-accountax-500 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-accountax-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    scrolled ? 'text-accountax-800' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link to="/contact">
              <Button className="bg-accountax-500 hover:bg-accountax-600 text-white shadow-lg hover:shadow-xl hover:shadow-accountax-500/20 transition-all">
                <span>Free Consultation</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
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
              link.hasDropdown ? (
                <div key={link.name} className="space-y-2">
                  <div className="font-medium text-accountax-800 py-2 border-b border-accountax-100/20 animate-slide-in-bottom" style={{ animationDelay: `${index * 0.05}s` }}>
                    {link.name}
                  </div>
                  <div className="ml-4 space-y-2">
                    {link.items?.map((item, subIndex) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={toggleMenu}
                        className="block text-accountax-700 hover:text-accountax-500 font-medium transition-colors py-1 animate-slide-in-bottom"
                        style={{ animationDelay: `${index * 0.05 + subIndex * 0.03}s` }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={toggleMenu}
                  className="block text-accountax-800 hover:text-accountax-500 font-medium transition-colors py-2 border-b border-accountax-100/20 animate-slide-in-bottom"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link to="/contact">
              <Button className="w-full bg-accountax-500 hover:bg-accountax-600 text-white animate-slide-in-bottom" style={{ animationDelay: '0.25s' }}>
                Free Consultation
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
