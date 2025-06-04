
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import AnimatedElement from './AnimatedElement';

const PricingCard = () => {
  const features = [
    "First 6 hours free consultation",
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-accountax-50 to-white relative overflow-hidden">
      <div className="absolute -top-20 left-1/4 w-64 h-64 rounded-full bg-accountax-200 opacity-10 filter blur-3xl"></div>
      <div className="absolute -bottom-20 right-1/3 w-80 h-80 rounded-full bg-accountax-300 opacity-10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <AnimatedElement type="fade-in" delay={0.2} className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-3 py-1 bg-accountax-100 text-accountax-700 text-sm font-medium rounded-full">Special Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-accountax-900 mb-4">
            Start Your Journey with Our <span className="gradient-text bg-gradient-to-r from-accountax-700 to-accountax-500">packages starting from</span>
          </h2>
          <p className="text-lg text-accountax-600 max-w-2xl mx-auto">
            Perfect for small businesses and startups looking for professional accounting support
          </p>
        </AnimatedElement>

        <div className="flex justify-center">
          <AnimatedElement type="zoom-in" delay={0.4} className="w-full max-w-md">
            <Card className="relative bg-white rounded-2xl shadow-2xl border-2 border-accountax-200 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accountax-500 to-accountax-400"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accountax-100 rounded-full opacity-30"></div>
              
              <CardHeader className="text-center pb-2 pt-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-accountax-500 text-white text-xs font-medium rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
                <CardTitle className="text-2xl font-serif font-semibold text-accountax-800">Packages Starting From</CardTitle>
                <CardDescription className="text-accountax-600 mt-2">
                </CardDescription>
                <div className="mt-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-accountax-700">£20</span>
                    <span className="text-accountax-500 ml-1">/month</span>
                  </div>
                  <p className="text-sm text-accountax-500 mt-1"></p>
                </div>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accountax-100 flex items-center justify-center mt-0.5 mr-3">
                        <Check className="h-3 w-3 text-accountax-600" />
                      </div>
                      <span className="text-accountax-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-accountax-500 hover:bg-accountax-600 text-white py-3 shadow-lg shadow-accountax-500/20 hover:shadow-xl hover:shadow-accountax-500/30 transition-all">
                  Get Started Today
                </Button>
                
                <p className="text-center text-xs text-accountax-500 mt-4">
                  No setup fees • Cancel anytime • 30-day money-back guarantee
                </p>
              </CardContent>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;
