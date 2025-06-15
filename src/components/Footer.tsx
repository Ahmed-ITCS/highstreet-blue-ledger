
import React from 'react';
import AnimatedElement from './AnimatedElement';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'BookKeeping', href: '/services/book-keeping' },
    { name: 'Self Assessment Tax', href: '/services/self-assessment-tax' },
    { name: 'Capital Gains tax ', href: '/services/capital-gains-tax' },
    { name: 'Payroll', href: '/services/payroll' },
    { name: 'Accounts Managment ', href: '/services/accounts-management' },
    { name: 'Cloud Accounting ', href: '/services/cloud-accounting' },
    { name: 'Corporation Tax CT600', href: '/services/corporation-tax' },
    { name: 'HMRC Tax Investigations', href: '/services/hmrc-tax-investigations' },
    { name: 'Vat Returns', href: '/services/vat-returns' },
    { name: 'Year End Accounts', href: '/services/year-end-accounts' },
    { name: 'Contractor Accountings', href: '/services/contractor-accounting' },
    { name: 'Limited-Liability-Partnerships', href: '/services/limited-liability-partnerships' },
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

  // Social icon definitions: update 'href' as needed
  const socials = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "bg-blue-800 hover:bg-blue-900",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      color: "bg-cyan-500 hover:bg-cyan-600",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "#",
      color: "bg-red-600 hover:bg-red-700",
    },
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
              <div className="flex space-x-3 mt-4">
                {socials.map((soc, i) => (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-full shadow transition-all duration-200 ${soc.color}`}
                    aria-label={soc.name}
                  >
                    <soc.icon size={22} className="text-white" />
                  </a>
                ))}
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
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement type="slide-in-bottom" delay={2.4}>
          <div className="border-t border-accountax-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-accountax-300 text-sm">
              © {currentYear} Highstreet Accountax Ltd. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 bg-accountax-800/30 p-2 rounded-lg"></div>
          </div>
        </AnimatedElement>
      </div>
    </footer>
  );
};

export default Footer;
