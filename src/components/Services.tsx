
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calculator, ChartBar, CreditCard, FileText, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Tax Planning & Compliance",
      description: "Strategic tax planning and timely compliance to minimize your tax burden and avoid penalties.",
      icon: <Calculator className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "Accounting & Bookkeeping",
      description: "Comprehensive bookkeeping services and financial statement preparation to keep your finances organized.",
      icon: <BookOpen className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "Business Advisory",
      description: "Strategic guidance to help your business grow, improve profitability, and achieve its financial goals.",
      icon: <ChartBar className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "Payroll Services",
      description: "Accurate and timely payroll processing ensuring compliance with HMRC regulations and auto-enrollment.",
      icon: <CreditCard className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "VAT Returns",
      description: "Proper VAT registration, timely submission of returns, and strategic planning to optimize your VAT position.",
      icon: <FileText className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "Audit & Assurance",
      description: "Independent audit services providing assurance on financial statements and internal controls.",
      icon: <Shield className="h-10 w-10 text-accountax-500" />,
    },
  ];

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-accountax-50 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-accountax-100 opacity-30 filter blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-accountax-100 opacity-30 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-3 py-1 bg-accountax-100 text-accountax-700 text-sm font-medium rounded-full">Our Expertise</span>
          </div>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive financial solutions tailored to meet the unique needs of your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border border-accountax-100 group hover:shadow-xl hover:shadow-accountax-200/20 transition-all duration-300 hover:-translate-y-1 hover:border-accountax-200 bg-white"
            >
              <CardHeader>
                <div className="mb-4 p-3 bg-accountax-50 inline-flex rounded-xl group-hover:bg-accountax-100 transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-accountax-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-accountax-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
