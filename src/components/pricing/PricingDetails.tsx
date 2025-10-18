import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PricingDetails = () => {
  return (
    <section className="bg-registeo-blue-light py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
          Get <span className="gradient-text">30% off</span> <br className="hidden md:inline" />
          on every domain!
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-700 md:text-2xl">
          Enjoy significant savings on all TLDs compared to market prices.
          Transparent pricing, no hidden fees.
        </p>
        <Button
          className={cn(
            "gradient-button px-10 py-4 text-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300",
          )}
        >
          Find your domain now &rarr;
        </Button>
      </div>
    </section>
  );
};

export default PricingDetails;