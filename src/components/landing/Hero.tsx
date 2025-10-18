import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-center md:py-32">
      <div className="container relative z-10 mx-auto px-4">
        <h1 className="mb-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
          Secure Your Perfect Domain <br className="hidden md:inline" />
          <span className="gradient-text">in Seconds.</span>
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-600 md:text-2xl">
          Registeo makes buying and managing domains effortless — fast,
          affordable, and beginner-friendly.
        </p>
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <a
            href="https://discord.com/invite/z4aWdTXF4r"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className={cn(
                "gradient-button px-8 py-3 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300",
              )}
            >
              Get Your Domain
            </Button>
          </a>
          <Link
            to="/pricing"
            className="text-lg font-medium text-registeo-blue-dark hover:underline"
          >
            Check pricing &rarr;
          </Link>
        </div>
      </div>
      {/* Subtle light globe / internet abstract digital element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 transform opacity-20">
        <div className="h-96 w-96 rounded-full bg-registeo-blue-light blur-3xl"></div>
      </div>
      <div className="absolute left-0 bottom-0 translate-y-1/2 transform opacity-10">
        <div className="h-80 w-80 rounded-full bg-registeo-blue blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;