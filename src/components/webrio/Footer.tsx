import React from "react";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black/60 backdrop-blur-lg relative z-20 mt-12">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Webrio
            </span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
            The smartest way to compare prices and save money across your favorite e-commerce stores.
            <br />
            <span className="text-purple-500 font-medium">Made for smart shoppers.</span>
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">About Us</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          {[Twitter, Instagram, Linkedin, Github].map((Icon, idx) => (
            <Button
              key={idx}
              size="icon"
              variant="outline"
              className="bg-white/5 border-white/10 hover:bg-purple-600 hover:border-purple-600 text-white rounded-full transition-all hover:scale-110 shadow-lg shadow-purple-900/10"
            >
              <Icon size={18} />
            </Button>
          ))}
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white/5 py-6 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Webrio Inc. All rights reserved.
      </div>
    </footer>
  );
};
