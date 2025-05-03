
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
    <section id="services" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <div className="h-1 w-10 bg-accountax-500 mb-1"></div>
            <div className="h-1 w-16 bg-accountax-400"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-accountax-900 mb-4">Our Professional Services</h2>
          <p className="text-lg text-accountax-600 max-w-3xl mx-auto">
            Comprehensive expertise tailored to the unique financial needs and objectives of your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden group hover:shadow-xl transition-all duration-500 border-0 hover:border-accountax-100 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accountax-50/50 to-white z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 pb-2">
                <div className="mb-4 p-3 bg-accountax-50 inline-flex rounded-lg group-hover:bg-accountax-100 transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-serif font-semibold text-accountax-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-accountax-600">{service.description}</CardDescription>
                <div className="mt-6 flex items-center text-accountax-500 font-medium text-sm">
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
