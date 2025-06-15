
import React from "react";
import { Mail } from "lucide-react";

const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const FloatingContactButton: React.FC = () => (
  <button
    aria-label="Contact Us"
    onClick={scrollToContact}
    className="fixed bottom-8 right-6 z-50 bg-accountax-500 hover:bg-accountax-600 text-white rounded-full shadow-lg flex items-center justify-center w-16 h-16 transition-all duration-200 border-4 border-white animate-fade-in group"
    style={{
      boxShadow: "0 4px 32px 0 rgba(0, 135, 131, 0.20)",
    }}
  >
    <Mail size={32} className="group-hover:scale-110 transition-transform duration-200" />
    <span className="sr-only">Go to Contact Form</span>
  </button>
);

export default FloatingContactButton;
