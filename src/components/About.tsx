
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from 'react-router-dom';
import AnimatedElement from './AnimatedElement';

const About = () => {
  const stats = [
    { value: '8+', label: 'Years of Experience' },
    { value: '500+', label: 'Clients Served' },
    { value: '£100M+', label: 'Client Tax Savings' },
    { value: '98%', label: 'Client Retention Rate' },
  ];

  return (
    <section id="about" className="py-24 bg-accountax-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5"></div>
      
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 w-64 h-64 rounded-full border-2 border-accountax-200/30 animate-rotate opacity-30"></div>
      <div className="absolute bottom-1/4 left-10 w-32 h-32 rounded-full border border-accountax-300/20 animate-rotate opacity-20" style={{ animationDuration: '30s' }}></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accountax-100/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accountax-200/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="space-y-10">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <AnimatedElement
                    key={index}
                    type={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                    delay={0.2 + (index * 0.3)}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 group border border-accountax-100/20 hover:border-accountax-200">
                      <div className="text-3xl font-serif font-bold text-accountax-500 mb-2 group-hover:scale-110 transition-transform origin-left">{stat.value}</div>
                      <div className="text-accountax-700 font-medium text-sm">{stat.label}</div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
              
              <AnimatedElement type="slide-in-left" delay={1.4}>
                <div className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-accountax-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accountax-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accountax-50 rounded-full"></div>
                
                  <Quote className="text-4xl font-serif text-accountax-300/40 mb-4">"</Quote>
                  <p className="relative z-10 italic text-accountax-700">
                    "As a leading UK accounting firm, we combine technical excellence with a deep understanding of your business to deliver exceptional results."
                  </p>
                  <div className="mt-6 flex items-center relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accountax-400 to-accountax-600 flex items-center justify-center mr-3 shadow-md">
                      <span className="font-serif font-bold text-white">JD</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-accountax-900">John Davies</h4>
                      <p className="text-sm text-accountax-600">Managing Partner</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
          
          <div className="lg:col-span-3 order-1 lg:order-2">
            <AnimatedElement type="slide-in-right" delay={0.3} className="mb-16">
              <div className="inline-block mb-2">
                <div className="h-1 w-10 bg-accountax-500 mb-1"></div>
                <div className="h-1 w-16 bg-accountax-400"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-accountax-900 mb-6">
                About <span className="gradient-text bg-gradient-to-r from-accountax-800 to-accountax-600">Highstreet Accountax</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-accountax-700">
                  Established in London, Highstreet Accountax has been providing exceptional accounting services to UK businesses for over 8 years. Our experienced team of chartered accountants works closely with clients to understand their unique challenges and deliver tailored financial solutions.
                </p>
                
                <p className="text-accountax-700">
                  What sets us apart is our commitment to building long-term relationships with our clients. We take a proactive approach to identify opportunities and mitigate risks before they arise, ensuring your business is always prepared for what lies ahead.
                </p>
                
                <p className="text-accountax-700 mb-8">
                  From startups to established enterprises, we help businesses across various industries optimize their financial operations, ensure compliance, and achieve sustainable growth.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/team">
                  <Button className="button-fancy bg-accountax-700 hover:bg-accountax-800 text-white group">
                    <span className="relative z-10">Meet Our Team</span>
                  </Button>
                </Link>
                <Button variant="outline" className="border-accountax-700 text-accountax-700 hover:bg-accountax-50">
                  Our Approach
                </Button>
              </div>
            </AnimatedElement>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Meet the Team", desc: "Experienced professionals dedicated to your financial success", link: "/team" },
                { title: "Client-Centric Focus", desc: "Tailored solutions that address your specific business challenges" }
              ].map((item, index) => (
                <AnimatedElement
                  key={index}
                  type={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                  delay={1.6 + (index * 0.3)}
                >
                  <Link to={item.link || "#"} className="block">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-accountax-100/20 hover:border-accountax-300/30 relative overflow-hidden group h-full">
                      <div className="absolute top-0 left-0 h-full w-1 bg-accountax-500/30 group-hover:bg-accountax-500 transition-colors duration-300"></div>
                      <div className="pl-3">
                        <div className="flex items-center mb-3">
                          <div className="mr-2 text-accountax-500">
                            <Check size={18} />
                          </div>
                          <h3 className="font-serif text-lg font-semibold text-accountax-800 group-hover:text-accountax-600 transition-colors">{item.title}</h3>
                        </div>
                        <p className="text-accountax-600 text-sm pl-7">{item.desc}</p>
                      </div>
                    </div>
                  </Link>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Quote component for the testimonial
const Quote = ({ children, className }) => (
  <div className={className}>
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-accountax-200">
      <path d="M10 11C10 12.66 8.66 14 7 14C5.34 14 4 12.66 4 11C4 9.34 5.34 8 7 8C8.66 8 10 9.34 10 11Z" fill="currentColor" />
      <path d="M20 11C20 12.66 18.66 14 17 14C15.34 14 14 12.66 14 11C14 9.34 15.34 8 17 8C18.66 8 20 9.34 20 11Z" fill="currentColor" />
      <path d="M7 14V17.5C7 18.33 7.67 19 8.5 19H15.5C16.33 19 17 18.33 17 17.5V14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
      <path d="M7 22V19" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
      <path d="M17 22V19" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
      <path d="M12 22V19" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
      <path d="M7 9V8C7 5.79 7 4.25 9.4 4.03C9.6 4.01 9.8 4 10 4H14C14.2 4 14.4 4.01 14.6 4.03C17 4.25 17 5.79 17 8V9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
    </svg>
  </div>
);

export default About;
