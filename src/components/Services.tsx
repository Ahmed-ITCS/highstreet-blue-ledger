
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, ChartBar, FileText, Shield, Search, Settings } from "lucide-react";
import { Banknote, AlertTriangle,UserCog,Users } from "lucide-react";
import AnimatedElement from './AnimatedElement';

const Services = () => {
  const services = [
    {
      title: "Book Keeping",
      description: "Accurate and organized financial record-keeping to support informed business decisions and regulatory compliance.",
      icon: <Calculator className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "Self Assessment Tax",
      description: "Expert guidance in filing self-assessment tax returns accurately and on time, ensuring compliance and minimizing liabilities.",
      icon: <Search className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "Capital Gains Tax",
      description: "Specialized advice to help you manage and reduce capital gains tax liabilities through strategic planning and compliance.",
      icon: <ChartBar className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "Payroll",
      description: "Reliable and efficient payroll services to ensure timely employee payments, compliance with regulations, and accurate reporting.",
      icon: <Shield className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "Accounts Management",
      description: "Professional handling of your accounts to ensure accuracy, consistency, and timely financial reporting for better decision-making.",
      icon: <Settings className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "Cloud Accounting",
      description: "Modern accounting solutions using cloud-based platforms to provide real-time access, automation, and enhanced collaboration.",
      icon: <FileText className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "Corporation Tax CT600",
      description: "Comprehensive corporation tax services to ensure compliance, optimize tax efficiency, and support your business growth.",
      icon: <Banknote className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "HMRC Tax Investigations",
      description: "Expert representation and support during HMRC tax investigations to protect your interests and ensure a smooth resolution.",
      icon: <AlertTriangle className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "VAT Returns",
      description: "Expert representation and support during VAT returns to ensure compliance, optimize tax efficiency, and support your business growth.",
      icon: <FileText className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "Year End Accounts",
      description: "Expert representation and support during Year End Accounts to ensure compliance, optimize tax efficiency, and support your business growth.",
      icon: <FileText className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "Contractor Accounting",
      description: "Specialized accounting and tax solutions tailored for contractors, freelancers, and consultants—ensuring IR35 compliance, optimized take-home pay, and stress-free financial management.",
      icon: <UserCog className="h-10 w-10 text-accountax-500" />,
    },
    {
      title: "Limited Liability Partnerships",
      description: "Comprehensive accounting and compliance services tailored for Limited Liability Partnerships (LLPs), ensuring accurate profit-sharing, partner tax returns, and full adherence to HMRC and Companies House regulations.",
      icon: <Users className="h-10 w-10 text-accountax-500" />,
    }
    
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
        <AnimatedElement type="slide-in-left" delay={0.5} className="text-center mb-16">
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
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedElement 
              key={index}
              type={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
              delay={1.0 + (index * 0.4)}
            >
              <Card className="card-elegant group h-full">
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
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
