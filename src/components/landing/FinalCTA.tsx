import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FinalCTA = () => {
  return (
    <section className="bg-registeo-blue-light py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
          Your online identity <br className="hidden md:inline" />
          <span className="gradient-text">starts here.</span>
        </h2>
        <a
          href="https://discord.com/invite/z4aWdTXF4r"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className={cn(
              "gradient-button px-10 py-4 text-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300",
            )}
          >
            Search your domain &rarr;
          </Button>
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;