import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PricingBanner = () => {
  return (
    <section className="bg-registeo-blue-light py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-4xl font-bold text-gray-900">
          Domains starting at just <span className="gradient-text">$0.99/year</span>
        </h2>
        <p className="mb-8 text-xl text-gray-700">
          Find your perfect domain name today and get started instantly.
        </p>
        <Button
          className={cn(
            "gradient-button px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300",
          )}
        >
          Search for your domain &rarr;
        </Button>
      </div>
    </section>
  );
};

export default PricingBanner;