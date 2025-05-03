
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
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

  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <div className="h-1 w-10 bg-accountax-500 mb-1"></div>
            <div className="h-1 w-16 bg-accountax-400"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-accountax-900 mb-4">Client Success Stories</h2>
          <p className="text-lg text-accountax-600 max-w-3xl mx-auto">
            Hear from businesses that have achieved financial clarity and growth through our partnership.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-accountax-50 text-accountax-600 text-xs font-medium py-1 px-3 rounded-full">
                    {testimonial.company}
                  </div>
                  <span className="text-5xl font-serif text-accountax-200 leading-none">"</span>
                </div>
                <blockquote className="text-accountax-700 mb-8 italic leading-relaxed">"{testimonial.quote}"</blockquote>
                <div className="flex items-center pt-6 border-t border-accountax-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-accountax-100">
                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
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
          <p className="text-accountax-600 mb-6">Join our growing list of satisfied clients</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-12 w-32 bg-accountax-200/30 rounded-md flex items-center justify-center">
                <span className="font-medium text-accountax-700">Client {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
