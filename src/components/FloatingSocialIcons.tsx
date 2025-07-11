
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube , X} from "lucide-react";

// Same social icons and links as in the footer
const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#",
    color: "bg-blue-800 hover:bg-blue-900",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/share/1C6LHz6Rjb/",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/highstreet650?utm_source=qr&igsh=Y2drZGJncDhxb2Yz",
    color: "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500",
  },
  {
    name: "X",
    icon: X,
    href: "https://x.com/AccountaxLtd?s=08",
    color: "bg-black hover:bg-neutral-900",
  },
 
];

const FloatingSocialIcons: React.FC = () => (
  <div
    className="fixed bottom-32 left-6 z-50 flex flex-col space-y-2 animate-fade-in"
    aria-label="Floating social media icons"
  >
    {socials.map((soc) => (
      <a
        key={soc.name}
        href={soc.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-200 ${soc.color} hover:scale-110`}
        aria-label={soc.name}
        style={{ boxShadow: "0 2px 16px 0 rgba(0,0,0,0.12)" }}
      >
        <soc.icon size={26} className="text-white" />
      </a>
    ))}
  </div>
);

export default FloatingSocialIcons;
