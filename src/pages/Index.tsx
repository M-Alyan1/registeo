import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import ValueProposition from "@/components/landing/ValueProposition";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/layout/Footer";
import { MadeForRegisteo } from "@/components/made-for-registeo"; // Updated import
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <AnimatedSection delay={100}>
          <Hero />
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <Features />
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <ValueProposition />
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection delay={500}>
          <FinalCTA />
        </AnimatedSection>
      </main>
      <Footer />
      <MadeForRegisteo /> {/* Updated component usage */}
    </div>
  );
};

export default Index;