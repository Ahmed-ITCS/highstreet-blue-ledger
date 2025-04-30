
import React from 'react';

const About = () => {
  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '500+', label: 'Clients Served' },
    { value: '£100M+', label: 'Tax Saved' },
    { value: '98%', label: 'Client Retention' },
  ];

  return (
    <section id="about" className="section-padding bg-accountax-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accountax-200 opacity-20 filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accountax-300 opacity-20 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-6">
              <span className="px-3 py-1 bg-accountax-200 text-accountax-700 text-sm font-medium rounded-full">Since 1998</span>
            </div>
            <h2 className="section-title">About Highstreet Accountax</h2>
            <p className="text-accountax-700 mb-6">
              Established in London, Highstreet Accountax Ltd has been providing exceptional accounting services to UK businesses for over 25 years. Our team of certified accountants combines expertise with personalized service to help your business achieve its financial goals.
            </p>
            <p className="text-accountax-700 mb-6">
              We pride ourselves on building long-term relationships with our clients, understanding their unique needs, and delivering tailored financial solutions that drive success. Our approach is proactive rather than reactive, ensuring that we anticipate potential challenges and opportunities for your business.
            </p>
            <p className="text-accountax-700 mb-8">
              At Highstreet Accountax, we leverage the latest technology and industry best practices to provide efficient, accurate, and valuable financial services that give you peace of mind and allow you to focus on growing your business.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center p-2 bg-white rounded-lg shadow-sm transition-transform hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-accountax-500 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-accountax-700">ICAEW Chartered Accountants</span>
              </div>
              <div className="flex items-center p-2 bg-white rounded-lg shadow-sm transition-transform hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-accountax-500 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-accountax-700">FCA Regulated</span>
              </div>
              <div className="flex items-center p-2 bg-white rounded-lg shadow-sm transition-transform hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-accountax-500 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-accountax-700">Award-Winning Services</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-white p-8 rounded-2xl shadow-xl relative before:absolute before:content-[''] before:top-4 before:left-4 before:-z-10 before:w-full before:h-full before:bg-accountax-100 before:rounded-2xl">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-gradient-to-br from-white to-accountax-50 shadow-sm">
                    <div className="text-4xl font-serif font-bold text-accountax-500 mb-2">{stat.value}</div>
                    <div className="text-accountax-700 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
