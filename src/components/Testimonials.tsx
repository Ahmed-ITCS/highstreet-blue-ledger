
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Highstreet Accountax has transformed our financial management. Their expertise has helped us save significantly on taxes while ensuring full compliance.",
      author: "Sarah Johnson",
      position: "CEO, Johnson Retail Ltd",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80",
    },
    {
      quote: "We've been working with Highstreet Accountax for over 5 years now, and their service is consistently excellent. They're responsive, knowledgeable, and genuinely care about our success.",
      author: "Mark Thompson",
      position: "Director, Thompson Construction Co.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      quote: "As a small business owner, I needed an accounting firm that could provide personalized service. Highstreet Accountax has exceeded my expectations in every way.",
      author: "Emily Parker",
      position: "Founder, Parker Digital Solutions",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-accountax-50 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-accountax-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accountax-300 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-3 py-1 bg-accountax-100 text-accountax-700 text-sm font-medium rounded-full">Client Success Stories</span>
          </div>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. See what our clients have to say about working with Highstreet Accountax.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-accountax-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-5">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 inline-block text-yellow-400">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-4xl font-serif text-accountax-200 leading-none">"</span>
                </div>
                <blockquote className="text-accountax-700 italic mb-6">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accountax-100 group-hover:border-accountax-200 transition-colors">
                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-accountax-900">{testimonial.author}</p>
                    <p className="text-sm text-accountax-600">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
