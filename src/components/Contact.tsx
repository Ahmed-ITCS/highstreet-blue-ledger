
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-accountax-50 to-transparent"></div>
      <div className="absolute -top-20 left-1/4 w-64 h-64 rounded-full bg-accountax-200 opacity-10 filter blur-3xl"></div>
      <div className="absolute -bottom-20 right-1/3 w-80 h-80 rounded-full bg-accountax-300 opacity-10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-3 py-1 bg-accountax-100 text-accountax-700 text-sm font-medium rounded-full">Get in Touch</span>
          </div>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have a question or need assistance? Reach out to our team and we'll get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                    <p className="text-accountax-600 mt-1">123 Highstreet Road, London, UK, EC1A 1BB</p>
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
                    <p className="text-accountax-600 mt-1">info@highstreetaccountax.co.uk</p>
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
                    <p className="text-accountax-600 mt-1">+44 20 1234 5678</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-accountax-200">
                <h4 className="text-lg font-medium text-accountax-800 mb-4">Business Hours</h4>
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b border-accountax-100">
                      <td className="py-3 text-accountax-600">Monday - Friday</td>
                      <td className="py-3 text-accountax-800 font-medium">9:00 AM - 5:30 PM</td>
                    </tr>
                    <tr className="border-b border-accountax-100">
                      <td className="py-3 text-accountax-600">Saturday</td>
                      <td className="py-3 text-accountax-800 font-medium">By Appointment</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-accountax-600">Sunday</td>
                      <td className="py-3 text-accountax-800 font-medium">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-xl relative before:absolute before:content-[''] before:top-4 before:right-4 before:-z-10 before:w-full before:h-full before:bg-accountax-100/30 before:rounded-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-accountax-800">Full Name</label>
                  <Input id="name" placeholder="Your name" className="border-accountax-200 focus:border-accountax-400 focus:ring-accountax-400" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-accountax-800">Email Address</label>
                  <Input id="email" type="email" placeholder="your@email.com" className="border-accountax-200 focus:border-accountax-400 focus:ring-accountax-400" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-accountax-800">Phone Number</label>
                <Input id="phone" placeholder="Your phone number" className="border-accountax-200 focus:border-accountax-400 focus:ring-accountax-400" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-accountax-800">Subject</label>
                <Input id="subject" placeholder="How can we help you?" className="border-accountax-200 focus:border-accountax-400 focus:ring-accountax-400" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-accountax-800">Message</label>
                <Textarea id="message" placeholder="Your message" className="min-h-[120px] border-accountax-200 focus:border-accountax-400 focus:ring-accountax-400" />
              </div>
              
              <Button type="submit" className="w-full bg-accountax-500 hover:bg-accountax-600 shadow-lg shadow-accountax-500/20 hover:shadow-xl hover:shadow-accountax-500/30 transition-all">
                Send Message
              </Button>
              
              <p className="text-xs text-accountax-600 text-center mt-4">
                We'll respond to your inquiry within 24 business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
