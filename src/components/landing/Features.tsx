import React from "react";
import { Globe, Settings, DollarSign, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Globe,
    title: "Register any TLD instantly",
    description: ".com, .net, .xyz, and hundreds more. Find your perfect match.",
  },
  {
    icon: Settings,
    title: "Full DNS control, no complexity",
    description: "Manage your DNS records with an intuitive, user-friendly interface.",
  },
  {
    icon: DollarSign,
    title: "Affordable & Transparent",
    description: "Up to 50% off new domains. Clear pricing, no hidden fees.",
  },
  {
    icon: Zap,
    title: "Modern, blazing-fast UI",
    description: "Experience domain management designed for speed and efficiency.",
  },
];

const Features = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-16 text-4xl font-bold text-gray-900 md:text-5xl">
          Powerful Features, Simplified.
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="rounded-xl border-none bg-registeo-blue-light/30 p-6 text-left shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <CardHeader className="mb-4 p-0">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-registeo-blue text-white shadow-md">
                  <feature.icon size={24} />
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-gray-600">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;