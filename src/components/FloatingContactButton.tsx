
import React from "react";
import { MessageCircle } from "lucide-react";

const openWhatsAppChat = () => {
  const phoneNumber = "447836620228"; // The provided WhatsApp number
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};

const FloatingContactButton: React.FC = () => (
  <button
    aria-label="Chat on WhatsApp"
    onClick={openWhatsAppChat}
    className="fixed bottom-8 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-16 h-16 transition-all duration-200 border-4 border-white animate-fade-in group"
    style={{
      boxShadow: "0 4px 32px 0 rgba(0, 135, 131, 0.20)",
    }}
  >
    <MessageCircle size={32} className="group-hover:scale-110 transition-transform duration-200" />
    <span className="sr-only">Chat on WhatsApp</span>
  </button>
);

export default FloatingContactButton;
