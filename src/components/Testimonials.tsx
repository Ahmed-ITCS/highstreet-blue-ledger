
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Highstreet Accountax has transformed our financial operations. Their strategic tax planning saved us over £300,000 last year alone while ensuring full compliance with HMRC regulations.",
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
      name: "Xero",
      image: "/lovable-uploads/8c03e02a-0caa-408a-b794-a97cccdc23d6.png",
    },
    {
      name: "ACCA",
      image: "/lovable-uploads/d112c0dc-7475-4f3c-bbf2-407447f73b08.png",
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-accountax-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23008783%22%20fill-opacity%3D%220.05%22%3E%3C%2Frect%3E%3C%2Fsvg%3E')] opacity-70"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-2">
            <div className="h-1 w-10 bg-accountax-500 mb-1 rounded-full"></div>
            <div className="h-1 w-16 bg-accountax-400 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-accountax-900 mb-4">Client Success Stories</h2>
          <p className="text-lg text-accountax-600 max-w-3xl mx-auto">
            Hear from businesses that have achieved financial clarity and growth through our partnership.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group animate-slide-in-bottom ${index === activeIndex ? 'ring-2 ring-accountax-500/50' : ''}`}
              style={{ animationDelay: `${0.2 * index}s` }}
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
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            {clientLogos.map((client, i) => (
              <div 
                key={i} 
                className="h-20 w-auto flex items-center justify-center bg-white rounded-md p-4 shadow-md hover:shadow-lg transition-all backdrop-blur-md animate-slide-in-bottom hover:-translate-y-1"
                style={{ animationDelay: `${0.1 * (i + 3)}s` }}
              >
                <img 
                  src={client.image} 
                  alt={client.name} 
                  className="max-h-16 w-auto object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
