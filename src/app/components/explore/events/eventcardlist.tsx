"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import EventCard, { EventCardData } from "./eventcard";
import Image from "next/image";

const EVENTS: EventCardData[] = [
  {
    date: "OCT 8th",
    location: "The People's Forum",
    city: "New York, USA",
    imageUrl: "/rectangle-22-3.webp",
    link:
      "https://www.eventbrite.com/e/palestine-101-public-screening-tickets-1804716699229",
  },
  {
    date: "TBA",
    location: "Outschool HQ",
    city: "San Francisco, USA",
    imageUrl: "/rectangle-22-3.webp",
    link: "",
  },
  {
    date: "TBA",
    location: "TBD",
    city: "London UK",
    imageUrl: "/rectangle-22-3.webp",
    link: "",
  }
];

// ✅ helper to strictly allow internal or Eventbrite URLs
const isSafeLink = (url: string): boolean => {
  try {
    const parsed = new URL(url, window.location.origin);
    const allowed = [
      window.location.origin,
      "https://www.eventbrite.com",
      "https://eventbrite.com",
    ];
    return allowed.includes(parsed.origin);
  } catch {
    return false;
  }
};

export default function EventCardsList() {
  const [active, setActive] = useState<number | null>(null);
  const router = useRouter();

  const handleCardClick = (index: number, link?: string) => {
    const isMobile = window.innerWidth < 768;
    if (!link || link.trim() === "") return;

    // ✅ Mobile: open directly
    if (isMobile) {
      openLink(link);
      return;
    }

    // Desktop: toggle side button visibility
    setActive((prev) => (prev === index ? null : index));
  };

  // centralized safe navigation
  const openLink = (link: string) => {
    if (!link || link.trim() === "") return;
    if (!isSafeLink(link)) return; // ignore untrusted
    if (link.startsWith("https")) {
      // external (Eventbrite)
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      // internal
      router.push(link);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-5xl mx-auto py-10 sm:py-16">
      {EVENTS.map((e, i) => {
        const isActive = active === i;
        return (
          <div
            key={i}
            className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-center"
          >
            <EventCard
              data={e}
              ariaPressed={isActive}
              onClick={() => handleCardClick(i, e.link)}
              className={`py-4 transition-transform duration-300 ease-out ${
                isActive ? "sm:-translate-x-6" : "translate-x-0"
              }`}
            />
            {/* Side icon visible only on medium and up */}
            <div
              className={`hidden sm:flex items-center ml-4 transition-all duration-300 ease-out ${
                isActive ? "w-[90px] opacity-100 z-20" : "w-0 opacity-0 z-0"
              }`}
              aria-hidden={!isActive}
            >
              <button
                onClick={() => e.link && openLink(e.link)}
                className="focus:outline-none"
              >
                <div className="relative h-[138px] w-[90px] rounded-xl overflow-hidden">
                  <Image
                    src="/action-button.webp"
                    alt="presentation"
                    fill
                    priority
                    fetchPriority="high"
                    className="object-contain"
                    draggable={false}
                  />
                </div>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
