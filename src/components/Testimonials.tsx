
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import AnimatedElement from './AnimatedElement';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Highstreet Accountax has transformed our financial operations. Their strategic tax planning saved us alot of time and money last year alone while ensuring full compliance with HMRC regulations.",
      author: "Sarah Johnson",
      position: "CFO, Johnson Retail Ltd",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80",
      company: "Retail",
    },
    {
      quote: "As our business expanded internationally, we needed accountants who understood cross-border taxation. The team at Highstreet Accountax provided invaluable guidance through complex regulatory landscapes.",
      author: "Mark Thompson",
      position: "Managing Director, Thompson Construction Co.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      company: "Construction",
    },
    {
      quote: "The outsourced accounting service from Highstreet Accountax has given us the freedom to focus on growing our technology business while knowing our finances are in expert hands.",
      author: "Emily Parker",
      position: "Founder, Parker Digital Solutions",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      company: "Technology",
    },
  ];

  const clientLogos = [
    {
      name: "Receipt Bank",
      image: "/lovable-uploads/f0688af9-1c64-4844-8b62-0c9b00f4de58.png",
    },
    {
      name: "QuickBooks",
      image: "/lovable-uploads/667f6c57-b4f8-4b52-8336-e0fd019e6fe2.png",
    },
    {
      name: "FreeAgent",
      image: "/lovable-uploads/freeagent.png",
    },
    {
      name: "ACCA",
      image: "/lovable-uploads/d112c0dc-7475-4f3c-bbf2-407447f73b08.png",
    },
    {
      name: "ISO",
      image: "/lovable-uploads/ISO.webp",
    },
    {
      name: "SAGE",
      image: "/lovable-uploads/sage.png",
    },
    {
      name: "XERO",
      image: "/lovable-uploads/xero.png",
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-accountax-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23008783%22%20fill-opacity%3D%220.05%22%3E%3C%2Frect%3E%3C%2Fsvg%3E')] opacity-70"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedElement type="slide-in-left" delay={0.8} className="text-center mb-16">
          <div className="inline-block mb-2">
            <div className="h-1 w-10 bg-accountax-500 mb-1 rounded-full"></div>
            <div className="h-1 w-16 bg-accountax-400 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-accountax-900 mb-4">Client Success Stories</h2>
          <p className="text-lg text-accountax-600 max-w-3xl mx-auto">
            Hear from businesses that have achieved financial clarity and growth through our partnership.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <AnimatedElement
              key={index}
              type={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
              delay={1.5 + (index * 0.8)}
            >
              <Card 
                className={`bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group ${index === activeIndex ? 'ring-2 ring-accountax-500/50' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-accountax-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accountax-100/50 transition-colors duration-500"></div>
                  
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="bg-accountax-50 text-accountax-600 text-xs font-medium py-2 px-4 rounded-full shadow-sm">
                      {testimonial.company}
                    </div>
                    <Quote size={32} className="text-accountax-200 group-hover:text-accountax-300 transition-colors" />
                  </div>
                  
                  <blockquote className="text-accountax-700 mb-8 italic leading-relaxed relative z-10">"{testimonial.quote}"</blockquote>
                  
                  <div className="flex items-center pt-6 border-t border-accountax-100 relative z-10">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-accountax-100 shadow-md">
                      <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <p className="font-medium text-accountax-900">{testimonial.author}</p>
                      <p className="text-sm text-accountax-600">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
            {clientLogos.map((client, i) => (
              <AnimatedElement
                key={i}
                type={i % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                delay={3.9 + (i * 0.5)}
              >
                <div className="h-28 w-auto flex items-center justify-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all backdrop-blur-md hover:-translate-y-1">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="max-h-20 w-auto object-contain" 
                  />
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
