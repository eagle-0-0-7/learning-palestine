"use client";
import { useState } from "react";
import Image from "next/image";

interface ScholarProfile {
  id: number;
  name: string;
  title: string;
  institution: string;
  avatar: string;
  tags: string[];
}

const scholarProfiles: ScholarProfile[] = [
  {
    id: 1,
    name: "Dr. Raz Segal",
    title: "Historian / Genocide Scholar",
    institution: "Stockton University",
    avatar: "/thinkers/sagal.webp",
    tags: ["Holocaust", "Genocide", "Studies"],
  },
  {
    id: 2,
    name: "Dr. Farah El-Sharif",
    title: "Islamic Studies Scholar",
    institution: "Stanford University",
    avatar: "/thinkers/farah.webp",
    tags: ["Islamic Law", "Culture", "Empire"],
  },
  {
    id: 3,
    name: "Dr. George Bisharat",
    title: "Legal Scholar & Advocate",
    institution: "UC Law San Francisco",
    avatar: "/thinkers/george.webp",
    tags: ["Law", "Middle East", "Human Culture"],
  },
  {
    id: 6,
    name: "Malak Afaneh, JD",
    title: "Human Rights Advocate",
    institution: "UC Berkeley School of Law",
    avatar: "/thinkers/malak.webp",
    tags: ["Justice", "Advocacy", "Equity"],
  },
  {
    id: 7,
    name: "Dr. Rasul Miller",
    title: "Historian & Radical Scholar",
    institution: "UC Irvine",
    avatar: "/thinkers/rasul.webp",
    tags: ["International", "Africa", "Thought"],
  },
];

export const MainContent = () => {
  const [selectedId, setSelectedId] = useState<number | null>(2);

  const handleClick = (id: number) =>
    setSelectedId((prev) => (prev === id ? id : id));

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 w-[85vw] py-4">
      {scholarProfiles.map((scholar) => {
        const isActive = scholar.id === selectedId;

        return (
          <article
            key={scholar.id}
            onClick={() => handleClick(scholar.id)}
            className={`cursor-pointer flex flex-col items-center justify-center gap-4 px-4 py-6 rounded-2xl overflow-hidden border transition-all duration-500 transform
          ${
              isActive
                // Active state: soft blue ambient glow + large shadow
                ? "bg-[#E6F0FF] border-[#8AB9FF] shadow-[0_15px_45px_rgba(0,102,255,0.3),0_0_40px_rgba(0,102,255,0.25)] scale-[1.04]"
                // Inactive state: deeper neutral hover with scale
                : "bg-white border-[#E5E7EB] shadow-[0_12px_44px_rgba(0,0,0,0.44)] hover:scale-[1.03]"
            }`}
          >
            {/* Avatar */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-[0_8px_28px_rgba(0,0,0,0.25)]">
              <Image
                src={scholar.avatar}
                alt={`${scholar.name} avatar`}
                fill
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col text-center">
              <h3 className="text-lg font-semibold text-[#111827] leading-snug">
                {scholar.name}
              </h3>
              <p className="text-sm text-[#6B7280]">{scholar.title}</p>
              <p className="text-sm font-medium text-[#374151]">
                {scholar.institution}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-col items-center w-full">
              <div className="flex justify-center gap-2 mb-2">
                {scholar.tags.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full border text-sm transition-colors duration-300 ${
                      isActive
                        ? "border-[#BFDBFE] bg-[#F0F7FF] text-[#1E40AF]"
                        : "border-[#E5E7EB] bg-[#F9FAFB] text-[#374151]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {scholar.tags[2] && (
                <div className="flex justify-center">
                  <span
                    className={`px-3 py-1 rounded-full border text-sm transition-colors duration-300 ${
                      isActive
                        ? "border-[#BFDBFE] bg-[#F0F7FF] text-[#1E40AF]"
                        : "border-[#E5E7EB] bg-[#F9FAFB] text-[#374151]"
                    }`}
                  >
                    {scholar.tags[2]}
                  </span>
                </div>
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
};
