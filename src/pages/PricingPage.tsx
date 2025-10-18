import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingDetails from "@/components/pricing/PricingDetails";
import PricingBanner from "@/components/landing/PricingBanner";
import { MadeForRegisteo } from "@/components/made-for-registeo"; // Updated import
import AnimatedSection from "@/components/AnimatedSection";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <AnimatedSection delay={100}>
          <section className="py-20 text-center">
            <h1 className="mb-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
              Simple & <span className="gradient-text">Transparent Pricing</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 md:text-2xl">
              No hidden fees, just straightforward costs for your perfect domain.
            </p>
          </section>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <PricingDetails />
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <PricingBanner /> {/* Reusing the existing pricing banner */}
        </AnimatedSection>
      </main>
      <Footer />
      <MadeForRegisteo /> {/* Updated component usage */}
    </div>
  );
};

export default PricingPage;