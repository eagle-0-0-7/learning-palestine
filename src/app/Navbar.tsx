"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Learn More", href: "/learn-more" },
  { label: "Contact Us", href: "/signup" },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleMobileSignUp = () => {
    console.log('here')
    router.push("/signup");
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/15 bg-black/5 md:bg-black/19 backdrop-blur-lg">
        {/* NAV WRAPPER */}
        <nav className="container mx-auto grid grid-cols-[1fr_auto_1fr] items-center h-16 md:h-20 px-4 sm:px-6">
          {/* LOGO */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => router.push("/")}
          >
            <span className="font-legend text-lg font-bold text-[#865CD0] md:text-white sm:text-xl md:text-2xl">
              RevED
            </span>
          </div>

          {/* CENTER LINKS (hidden on mobile) */}
          <ul className="hidden md:flex justify-center items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label} className="cursor-pointer">
                <Link
                  href={href}
                  className="font-manrope text-sm md:text-base text-[#ffffff] hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA / MOBILE TOGGLE */}
          <div className="flex justify-end items-center">
            {/* CTA (desktop only) */}
            <button
              type="button"
              onClick={() => router.push("/signup")}
              className="hidden cursor-pointer hover:bg-[#865CD0] hover:border-transparent md:inline-flex items-center gap-3 rounded-full border border-white/70 bg-[white/20] pl-6 pr-2 py-1 text-white whitespace-nowrap"
            >
              <span className="flex items-center gap-2 font-manrope text-sm md:text-base font-bold">
                Sign&nbsp;up&nbsp;now
                <div className="relative h-8 w-8 md:h-9 md:w-9">
                  <Image
                    src="/navbar/iconoir-arrow-up-right.svg"
                    alt="arrow icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </span>
            </button>

            {/* Hamburger (mobile only) */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-white/10 active:bg-white/20 active:scale-95 transition-transform duration-150"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Image
                  src={isOpen ? "/navbar/close.svg" : "/navbar/hamburger.svg"}
                  alt="menu icon"
                  fill
                  className="object-contain"
                />
              </div>
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden border-b border-white/15 bg-black/50 backdrop-blur-lg">
            <ul className="flex flex-col items-center gap-4 py-4">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    href={href}
                    className="font-manrope text-base text-white hover:text-[#5212C1] active:text-[#865CD0] transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              {/* Mobile CTA */}
              <button
                type="button"
                onClick={() => handleMobileSignUp()}
                className="inline-flex items-center gap-3 rounded-full bg-[#865CD0] border-transparent pl-6 pr-2 py-1 text-white"
              >
                <span className="flex items-center gap-2 font-manrope text-base font-bold">
                  Sign&nbsp;up&nbsp;now
                  <div className="relative h-8 w-8">
                    <Image
                      src="/navbar/iconoir-arrow-up-right.svg"
                      alt="arrow icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </span>
              </button>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
