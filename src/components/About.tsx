
import React from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { value: '25+', label: 'Years of Experience' },
    { value: '500+', label: 'Clients Served' },
    { value: '£100M+', label: 'Client Tax Savings' },
    { value: '98%', label: 'Client Retention Rate' },
  ];

  return (
    <section id="about" className="py-24 bg-accountax-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="space-y-10">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-3xl font-serif font-bold text-accountax-500 mb-2">{stat.value}</div>
                    <div className="text-accountax-700 font-medium text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accountax-500">
                <p className="italic text-accountax-700">
                  "As a leading UK accounting firm, we combine technical excellence with a deep understanding of your business to deliver exceptional results."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-accountax-200 flex items-center justify-center mr-3">
                    <span className="font-serif font-bold text-accountax-700">JD</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-accountax-900">John Davies</h4>
                    <p className="text-sm text-accountax-600">Managing Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="mb-16">
              <div className="inline-block mb-2">
                <div className="h-1 w-10 bg-accountax-500 mb-1"></div>
                <div className="h-1 w-16 bg-accountax-400"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-accountax-900 mb-6">About Highstreet Accountax</h2>
              
              <div className="space-y-6">
                <p className="text-accountax-700">
                  Established in London, Highstreet Accountax has been providing exceptional accounting services to UK businesses for over 25 years. Our experienced team of chartered accountants works closely with clients to understand their unique challenges and deliver tailored financial solutions.
                </p>
                
                <p className="text-accountax-700">
                  What sets us apart is our commitment to building long-term relationships with our clients. We take a proactive approach to identify opportunities and mitigate risks before they arise, ensuring your business is always prepared for what lies ahead.
                </p>
                
                <p className="text-accountax-700 mb-8">
                  From startups to established enterprises, we help businesses across various industries optimize their financial operations, ensure compliance, and achieve sustainable growth.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="bg-accountax-700 hover:bg-accountax-800 text-white">
                  Meet Our Team
                </Button>
                <Button variant="outline" className="border-accountax-700 text-accountax-700 hover:bg-accountax-50">
                  Our Approach
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "ICAEW Member Firm", desc: "Chartered accountants committed to the highest professional standards" },
                { title: "Industry Specialization", desc: "Deep expertise across various sectors including technology and manufacturing" },
                { title: "Client-Centric Focus", desc: "Tailored solutions that address your specific business challenges" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-serif text-lg font-semibold text-accountax-800 mb-2">{item.title}</h3>
                  <p className="text-accountax-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
