import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ValueProposition = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="lg:w-1/2">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Launch faster with <span className="gradient-text">instant activation</span>
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Get your domain up and running in minutes, not hours. Our streamlined
              process ensures your online presence is live as soon as you hit
              purchase.
            </p>
            <ul className="mb-10 space-y-4">
              <li className="flex items-center text-lg text-gray-700">
                <Check className="mr-3 h-6 w-6 text-registeo-blue-dark" />
                Instant DNS propagation
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <Check className="mr-3 h-6 w-6 text-registeo-blue-dark" />
                Seamless integration with hosting
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <Check className="mr-3 h-6 w-6 text-registeo-blue-dark" />
                24/7 expert support
              </li>
            </ul>
          </div>
          <div className="relative lg:w-1/2">
            {/* Simple dashboard preview mock */}
            <div className="relative aspect-video w-full rounded-xl bg-registeo-blue-light/50 p-6 shadow-2xl">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-registeo-gradient-start/50 to-registeo-gradient-end/50 opacity-70 blur-xl"></div>
              <div className="relative h-full w-full rounded-lg bg-white p-4 shadow-inner flex items-center justify-center">
                {/* Replaced the gray block with the full Registeo logo */}
                <img 
                  src="/logos/registeo-full-logo.jpg" 
                  alt="Registeo Dashboard Preview" 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;