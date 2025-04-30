
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
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive financial solutions tailored to meet the unique needs of your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-accountax-100 hover:shadow-md transition-shadow hover:border-accountax-200">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
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
