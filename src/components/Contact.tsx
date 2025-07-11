
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import AnimatedElement from './AnimatedElement';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://contact-backend-neon.vercel.app/api/contact.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-accountax-50 to-transparent"></div>
      <div className="absolute -top-20 left-1/4 w-64 h-64 rounded-full bg-accountax-200 opacity-10 filter blur-3xl"></div>
      <div className="absolute -bottom-20 right-1/3 w-80 h-80 rounded-full bg-accountax-300 opacity-10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedElement type="slide-in-left" delay={0.8} className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-3 py-1 bg-accountax-100 text-accountax-700 text-sm font-medium rounded-full">Get in Touch</span>
          </div>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have a question or need assistance? Reach out to our team and we'll get back to you promptly.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedElement type="slide-in-left" delay={1.2}>
            <div className="bg-gradient-to-br from-accountax-50 to-blue-50 rounded-xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 bg-accountax-100 opacity-40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative">
                <h3 className="text-2xl font-serif font-semibold text-accountax-800 mb-6">Get in Touch</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start hover-lift">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                        <MapPin className="h-5 w-5 text-accountax-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-accountax-800">Our Location</h4>
                      <p className="text-accountax-600 mt-1">Bd3 8HD unit 935 Leeds Road</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start hover-lift">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                        <Mail className="h-5 w-5 text-accountax-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-accountax-800">Email Us</h4>
                      <p className="text-accountax-600 mt-1">adrehman@highstreetaccountax.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start hover-lift">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                        <Phone className="h-5 w-5 text-accountax-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-accountax-800">Call Us</h4>
                      <p className="text-accountax-600 mt-1">07404934025</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-accountax-200">
                  <h4 className="text-lg font-medium text-accountax-800 mb-4">Business Hours</h4>
                  <table className="w-full text-left">
                    <tbody>
                      <tr className="border-b border-accountax-100">
                        <td className="py-3 text-accountax-600">Monday - Friday</td>
                        <td className="py-3 text-accountax-800 font-medium">9:00 AM - 5:00 PM</td>
                      </tr>
                      <tr className="border-b border-accountax-100">
                        <td className="py-3 text-accountax-600">Saturday</td>
                        <td className="py-3 text-accountax-800 font-medium">10:00 AM - 3:00 PM</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-accountax-600">Appointments</td>
                        <td className="py-3 text-accountax-800 font-medium">7 days a week</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement type="slide-in-right" delay={1.6}>
            <div className="bg-white rounded-xl p-8 shadow-xl relative before:absolute before:content-[''] before:top-4 before:right-4 before:-z-10 before:w-full before:h-full before:bg-accountax-100/30 before:rounded-xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-accountax-800">Full Name</label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      className="border-accountax-200 focus:border-accountax-400 focus:ring-accountax-400" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-accountax-800">Email Address</label>
                    <Input 
                      id="email" 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com" 
                      className="border-accountax-200 focus:border-accountax-400 focus:ring-accountax-400" 
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-accountax-800">Phone Number</label>
                  <Input 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number" 
                    className="border-accountax-200 focus:border-accountax-400 focus:ring-accountax-400" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-accountax-800">Subject</label>
                  <Input 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?" 
                    className="border-accountax-200 focus:border-accountax-400 focus:ring-accountax-400" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-accountax-800">Message</label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message" 
                    className="min-h-[120px] border-accountax-200 focus:border-accountax-400 focus:ring-accountax-400" 
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-accountax-500 hover:bg-accountax-600 shadow-lg shadow-accountax-500/20 hover:shadow-xl hover:shadow-accountax-500/30 transition-all">
                  Send Message
                </Button>
                
                <p className="text-xs text-accountax-600 text-center mt-4">
                  We'll respond to your inquiry within 24 business hours.
                </p>
              </form>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Contact;
