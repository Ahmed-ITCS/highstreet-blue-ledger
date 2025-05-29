
import React from 'react';
import AnimatedElement from './AnimatedElement';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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

  ];
  
  
  const company = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'News & Insights', href: '#' },
  ];
  
  const legal = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-b from-accountax-900 to-accountax-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accountax-300 via-accountax-500 to-blue-400"></div>
      <div className="absolute opacity-10">
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-accountax-500 filter blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-60 h-60 rounded-full bg-blue-400 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <AnimatedElement type="slide-in-left" delay={0.8}>
            <div>
              <div className="mb-6">
                <a href="#" className="inline-block">
                  <div className="text-2xl font-serif font-bold text-white mb-2 relative">
                    Highstreet <span className="text-accountax-300">Accountax</span>
                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-accountax-400 to-transparent"></span>
                  </div>
                </a>
                <p className="mt-3 text-accountax-200 leading-relaxed">
                  Expert accounting services tailored to help your business thrive in today's competitive landscape.
                </p>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-accountax-800 hover:bg-accountax-700 flex items-center justify-center text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-accountax-800 hover:bg-accountax-700 flex items-center justify-center text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-accountax-800 hover:bg-accountax-700 flex items-center justify-center text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-accountax-800 hover:bg-accountax-700 flex items-center justify-center text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement type="slide-in-left" delay={1.2}>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white relative inline-block">
                Services
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accountax-500"></span>
              </h3>
              <ul className="space-y-2">
                {services.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="text-accountax-200 hover:text-white transition-colors flex items-center">
                      <span className="w-1.5 h-1.5 bg-accountax-500 rounded-full mr-2 opacity-70"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>
          
          <AnimatedElement type="slide-in-right" delay={1.6}>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white relative inline-block">
                Company
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accountax-500"></span>
              </h3>
              <ul className="space-y-2">
                {company.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="text-accountax-200 hover:text-white transition-colors flex items-center">
                      <span className="w-1.5 h-1.5 bg-accountax-500 rounded-full mr-2 opacity-70"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>
          
          <AnimatedElement type="slide-in-right" delay={2.0}>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white relative inline-block">
                Legal
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accountax-500"></span>
              </h3>
              <ul className="space-y-2">
                {legal.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="text-accountax-200 hover:text-white transition-colors flex items-center">
                      <span className="w-1.5 h-1.5 bg-accountax-500 rounded-full mr-2 opacity-70"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-accountax-800/50 rounded-lg border border-accountax-700/50">
                <p className="text-accountax-300 text-sm">
                  Highstreet Accountax Ltd is regulated by the Institute of Chartered Accountants in England and Wales.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
        
        <AnimatedElement type="slide-in-bottom" delay={2.4}>
          <div className="border-t border-accountax-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-accountax-300 text-sm">
              © {currentYear} Highstreet Accountax Ltd. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 bg-accountax-800/30 p-2 rounded-lg">
            </div>
          </div>
        </AnimatedElement>
      </div>
    </footer>
  );
};

export default Footer;
