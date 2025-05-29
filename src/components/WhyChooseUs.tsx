
import React from 'react';
import { CheckCircle, Users, Shield, Clock, Trophy, HeartHandshake } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Users className="w-8 h-8 text-accountax-500" />,
      title: "Experienced Team",
      description: "Over 8 years of expertise with qualified chartered accountants who understand your business needs."
    },
    {
      icon: <Shield className="w-8 h-8 text-accountax-500" />,
      title: "Trusted & Reliable",
      description: "ACCA qualified professionals with a proven track record of helping 500+ UK businesses succeed."
    },
    {
      icon: <Clock className="w-8 h-8 text-accountax-500" />,
      title: "Timely Service",
      description: "We meet all deadlines and provide proactive advice to keep your business compliant and profitable."
    },
    {
      icon: <Trophy className="w-8 h-8 text-accountax-500" />,
      title: "Award-Winning",
      description: "Recognized for excellence in client service with 98% satisfaction rate and industry awards."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-accountax-500" />,
      title: "Personal Approach",
      description: "We build lasting relationships, offering personalized solutions tailored to your specific requirements."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accountax-500" />,
      title: "Comprehensive Solutions",
      description: "From bookkeeping to tax planning, we provide complete accounting services under one roof."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-accountax-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-30"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedElement type="slide-in-bottom" delay={0.2}>
            <h2 className="section-title">Why Choose Highstreet Accountax?</h2>
          </AnimatedElement>
          <AnimatedElement type="slide-in-bottom" delay={0.4}>
            <p className="section-subtitle">
              Discover what sets us apart as your trusted accounting partner
            </p>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedElement
              key={index}
              type="slide-in-bottom"
              delay={0.6 + index * 0.1}
              className="card-elegant p-8 hover-lift group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-accountax-50 rounded-full group-hover:bg-accountax-100 transition-colors duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-accountax-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-accountax-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement type="slide-in-bottom" delay={1.2} className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm border border-accountax-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif font-semibold text-accountax-900 mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-accountax-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust us with their financial success. 
              Let's discuss how we can help your business thrive.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-accountax-700">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center text-accountax-700">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">No Hidden Fees</span>
              </div>
              <div className="flex items-center text-accountax-700">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">Quick Response</span>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default WhyChooseUs;
