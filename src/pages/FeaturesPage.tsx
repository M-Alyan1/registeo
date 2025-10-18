import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Features from "@/components/landing/Features";
import { MadeForRegisteo } from "@/components/made-for-registeo"; // Updated import
import AnimatedSection from "@/components/AnimatedSection";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <AnimatedSection delay={100}>
          <section className="py-20 text-center">
            <h1 className="mb-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
              All the <span className="gradient-text">Features</span> you need
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 md:text-2xl">
              Discover how Registeo simplifies domain management with powerful and intuitive tools.
            </p>
          </section>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <Features />
        </AnimatedSection>
      </main>
      <Footer />
      <MadeForRegisteo /> {/* Updated component usage */}
    </div>
  );
};

export default FeaturesPage;