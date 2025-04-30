
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have a question or need assistance? Reach out to our team and we'll get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-accountax-50 rounded-xl p-8">
            <h3 className="text-2xl font-serif font-semibold text-accountax-800 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accountax-100 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accountax-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-accountax-800">Our Location</h4>
                  <p className="text-accountax-600 mt-1">123 Highstreet Road, London, UK, EC1A 1BB</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accountax-100 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-accountax-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-accountax-800">Email Us</h4>
                  <p className="text-accountax-600 mt-1">info@highstreetaccountax.co.uk</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accountax-100 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-accountax-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-accountax-800">Call Us</h4>
                  <p className="text-accountax-600 mt-1">+44 20 1234 5678</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-accountax-800 mb-4">Business Hours</h4>
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b border-accountax-100">
                    <td className="py-2 text-accountax-600">Monday - Friday</td>
                    <td className="py-2 text-accountax-800">9:00 AM - 5:30 PM</td>
                  </tr>
                  <tr className="border-b border-accountax-100">
                    <td className="py-2 text-accountax-600">Saturday</td>
                    <td className="py-2 text-accountax-800">By Appointment</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-accountax-600">Sunday</td>
                    <td className="py-2 text-accountax-800">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-accountax-800">Full Name</label>
                  <Input id="name" placeholder="Your name" className="border-accountax-200" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-accountax-800">Email Address</label>
                  <Input id="email" type="email" placeholder="your@email.com" className="border-accountax-200" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-accountax-800">Phone Number</label>
                <Input id="phone" placeholder="Your phone number" className="border-accountax-200" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-accountax-800">Subject</label>
                <Input id="subject" placeholder="How can we help you?" className="border-accountax-200" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-accountax-800">Message</label>
                <Textarea id="message" placeholder="Your message" className="min-h-[120px] border-accountax-200" />
              </div>
              
              <Button type="submit" className="w-full bg-accountax-500 hover:bg-accountax-600">
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
