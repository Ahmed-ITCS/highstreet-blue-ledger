
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Highstreet Accountax has transformed our financial management. Their expertise has helped us save significantly on taxes while ensuring full compliance.",
      author: "Sarah Johnson",
      position: "CEO, Johnson Retail Ltd",
    },
    {
      quote: "We've been working with Highstreet Accountax for over 5 years now, and their service is consistently excellent. They're responsive, knowledgeable, and genuinely care about our success.",
      author: "Mark Thompson",
      position: "Director, Thompson Construction Co.",
    },
    {
      quote: "As a small business owner, I needed an accounting firm that could provide personalized service. Highstreet Accountax has exceeded my expectations in every way.",
      author: "Emily Parker",
      position: "Founder, Parker Digital Solutions",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-accountax-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. See what our clients have to say about working with Highstreet Accountax.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-accountax-100 hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 inline-block text-yellow-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-accountax-700 italic mb-6">"{testimonial.quote}"</blockquote>
                <div>
                  <p className="font-semibold text-accountax-900">{testimonial.author}</p>
                  <p className="text-sm text-accountax-600">{testimonial.position}</p>
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
