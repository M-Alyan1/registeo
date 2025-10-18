import React from "react";

const TrustedBy = () => {
  const logos = [
    "/public/placeholder.svg", // Replace with actual logos
    "/public/placeholder.svg",
    "/public/placeholder.svg",
    "/public/placeholder.svg",
    "/public/placeholder.svg",
  ];

  return (
    <section className="bg-gray-50 py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-lg font-semibold uppercase tracking-wider text-gray-500">
          Trusted by startups & creators worldwide
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand Logo ${index + 1}`}
              className="h-10 w-auto grayscale opacity-60 transition-opacity duration-300 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;