import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I transfer my existing domain?",
    answer:
      "Yes, you can easily transfer your existing domain to Registeo. Our streamlined process makes it simple to move your domain and consolidate your online presence.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "Not at all! Registeo is designed to be beginner-friendly. Our intuitive interface and helpful guides ensure you can manage your domains without any technical expertise.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Absolutely. Registeo offers flexible plans that allow you to upgrade or downgrade your services as your needs evolve. You're never locked into a plan that doesn't fit.",
  },
  {
    question: "Is Registeo secure?",
    answer:
      "Security is our top priority. Registeo employs industry-leading security measures, including SSL encryption and robust data protection protocols, to keep your domains safe and secure.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-12 text-4xl font-bold text-gray-900 md:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="mb-4 rounded-lg border border-gray-200 bg-registeo-blue-light/20 px-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <AccordionTrigger className="py-4 text-left text-xl font-semibold text-gray-800 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-lg text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;