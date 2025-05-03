
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, ChartBar, FileText, Shield, Search, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Tax Advisory",
      description: "Strategic tax planning and compliance to minimize your obligations while ensuring full regulatory adherence.",
      icon: <Calculator className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "Audit & Assurance",
      description: "Independent auditing services providing reliable financial information and enhancing stakeholder confidence.",
      icon: <Search className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "Business Advisory",
      description: "Expert guidance to optimize operations, improve profitability and facilitate sustainable growth strategies.",
      icon: <ChartBar className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "Corporate Finance",
      description: "Comprehensive support for acquisitions, disposals, management buyouts and raising development capital.",
      icon: <Shield className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "Outsourcing",
      description: "Efficient management of accounting, payroll and compliance functions to reduce overhead and increase focus.",
      icon: <Settings className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "International Services",
      description: "Specialized support for businesses with international operations, including cross-border tax planning.",
      icon: <FileText className="h-10 w-10 text-accountax-500" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accountax-50/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-accountax-50/50 to-transparent"></div>
      <div className="absolute -right-64 top-1/4 w-96 h-96 bg-accountax-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -left-64 bottom-1/4 w-96 h-96 bg-accountax-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute inset-0 pattern-bg opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-2">
            <div className="h-1 w-10 bg-accountax-500 mb-1"></div>
            <div className="h-1 w-16 bg-accountax-400"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-accountax-900 mb-4">
            Our <span className="gradient-text bg-gradient-to-r from-accountax-700 to-accountax-500">Professional Services</span>
          </h2>
          <p className="text-lg text-accountax-600 max-w-3xl mx-auto">
            Comprehensive expertise tailored to the unique financial needs and objectives of your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-elegant group animate-slide-in-bottom"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardHeader className="relative z-10 pb-2">
                <div className="mb-4 p-4 bg-accountax-50 inline-flex rounded-2xl group-hover:bg-accountax-100 transition-colors duration-300 shadow-md">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-serif font-semibold text-accountax-800 group-hover:text-accountax-600 transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-accountax-600">{service.description}</CardDescription>
                <div className="mt-6 flex items-center text-accountax-500 font-medium text-sm group-hover:text-accountax-700 transition-colors">
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
