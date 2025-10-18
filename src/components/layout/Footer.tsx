import React from "react";
import { Link } from "react-router-dom";
import { X, Instagram, MessageSquare } from "lucide-react"; // Import X, Instagram, and MessageSquare icons

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left: Logo + Short Text */}
          <div className="text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start">
              <img src="/logos/registeo-logo.jpg" alt="Registeo Logo" className="h-8 w-auto" />
            </Link>
            <p className="mt-4 text-gray-600">
              Registeo makes domain registration simple, fast, and affordable for everyone.
            </p>
          </div>

          {/* Center: Links */}
          <div className="text-center md:text-center">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-registeo-blue-dark">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-600 hover:text-registeo-blue-dark">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-registeo-blue-dark">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="https://discord.gg/z4aWdTXF4r" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-registeo-blue-dark">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Social Media Icons */}
          <div className="text-center md:text-right">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">Connect With Us</h3>
            <div className="flex justify-center space-x-6 md:justify-end">
              <a
                href="https://x.com/registeoinc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-registeo-blue-dark transition-colors duration-200"
              >
                <X size={24} />
              </a>
              <a
                href="https://www.instagram.com/registeoinc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-registeo-blue-dark transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>
              {/* Support Chat Logo with Discord link */}
              <a
                href="https://discord.gg/z4aWdTXF4r"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-registeo-blue-dark transition-colors duration-200"
              >
                <MessageSquare size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Registeo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;