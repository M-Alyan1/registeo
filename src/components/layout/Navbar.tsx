import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <img src="/logos/registeo-logo.jpg" alt="Registeo Logo" className="h-8 w-auto" />
        </Link>
        <div className="flex items-center space-x-6">
          <NavLink to="/">Home</NavLink> {/* Added Home link */}
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="https://discord.gg/z4aWdTXF4r" external>Support</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, external = false }: { to: string; children: React.ReactNode; external?: boolean }) => {
  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-registeo-blue-dark transition-colors duration-200 text-lg font-medium"
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-registeo-blue-dark transition-colors duration-200 text-lg font-medium"
    >
      {children}
    </Link>
  );
};

export default Navbar;