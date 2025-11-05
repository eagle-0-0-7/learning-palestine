"use client";
import React from "react";
import Image from "next/image";

const partners = [
  {
    name: "IMEU",
    logo: "/partners/iuapr.webp",
    alt: "IMEU logo",
    padding: "px-5 md:px-13",
  },
  {
    name: "IMEU Pattern",
    logo: "/partners/imeu.webp",
    alt: "IMEU pattern icon",
    padding: "px-4 md:px-14",
  },
  {
    name: "Outschool.org",
    logo: "/partners/outschool.webp",
    alt: "Outschool.org logo",
    padding: "px-2 md:px-2",
  },
  {
    name: "GHTech",
    logo: "/partners/ghtech.webp",
    alt: "George Hofstetter Technologies logo",
    padding: "",
  },
];

export const Partners: React.FC = () => {
  return (
    <section
      role="region"
      aria-labelledby="partners-heading"
      className="flex flex-col items-center justify-center w-full px-6 py-16 md:py-24 bg-[#EFEFEF] relative overflow-hidden"
    >
      {/* Header */}
      <header className="flex flex-col items-center text-center max-w-2xl mb-12">
        <h2
          id="partners-heading"
          className="font-poppins font-semibold text-[#002B6B] text-3xl sm:text-4xl md:text-5xl leading-tight"
        >
          In partnership with those who make this possible
        </h2>
        <p className="mt-4 text-[#4B5563] font-manrope text-base sm:text-lg leading-relaxed">
          Organizations and communities around the world stand with us in
          advancing inclusive education and liberation through learning.
        </p>
      </header>

      {/* Partner logos */}
      <div className="
          flex flex-wrap items-center justify-center
          gap-x-10 gap-y-8 sm:gap-x-14 sm:gap-y-10 md:gap-x-20 md:gap-y-12
          w-full max-w-6xl
        ">
        {partners.map((partner) => (
          <div
            key={partner.name}
            aria-label={`Partner: ${partner.name}`}
            className="flex items-center justify-center bg-white rounded-2xl h-20 w-32 sm:w-40 sm:h-24 md:w-48 md:h-28"
          >
            <div className="relative w-full h-full p-4">
              <Image
                src={partner.logo}
                alt={partner.alt}
                fill
                // loading="lazy"
                // decoding="async"
                // fetchPriority="low"
                className={`object-contain transition-all duration-300 grayscale hover:grayscale-0 hover:scale-105 ${partner.padding}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Subtle fade at bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
};
