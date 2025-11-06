'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function CTA() {
  const [email, setEmail] = useState("");

  const router = useRouter();

  return (
    <section className="
    relative w-full max-w-[1240px] mx-auto
    px-6 py-16 md:py-20
    bg-gradient-to-br from-[#ffffff] via-[#F8F4FF] to-[#ECE6FF]
    rounded-[32px] overflow-hidden
    shadow-[0_20px_60px_rgba(134,92,208,0.15),0_16px_40px_rgba(0,0,0,0.05)]
  ">
      <div className="flex flex-col items-center justify-center text-center gap-8 w-full max-w-2xl mx-auto">
        <h2 className="font-poppins font-semibold text-[#002B6B] text-3xl sm:text-4xl md:text-[40px] md:leading-[48px]">
          Join bold learners and explore Palestine 101 together.
        </h2>

        <p className="text-[#4B5563] font-manrope text-base leading-relaxed sm:text-lg max-w-md">
          Unlock insight and stay connected as learning opens to the world.
        </p>

        <div className="flex flex-col w-full max-w-md gap-3 sm:flex-row sm:items-center sm:justify-center">
          <div className="flex flex-1 items-center gap-2 px-5 py-3 bg-white rounded-full border border-gray-200 shadow-[0_8px_56px_rgba(0,0,0,0.05)] focus-within:ring-2 focus-within:ring-[#865CD0]">
            <div className="relative w-5 h-5 opacity-70 flex-shrink-0">
              <Image
                src="/footer/mail.svg"
                alt="mail icon"
                fill
                className="object-contain"
                aria-hidden="true"
              />
            </div>

            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 bg-transparent border-none outline-none text-gray-700 text-sm sm:text-base placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            onClick={() =>
              router.push(`/signup?email=${encodeURIComponent(email)}`)}
            className="inline-flex cursor-pointer items-center justify-center px-8 py-3 sm:px-10 sm:py-3 bg-[#865CD0] text-white font-semibold rounded-full border border-[#865CD0] hover:bg-[#7542c9] active:bg-[#6330b7] transition-colors duration-200"
          >
            Join Us
          </button>
        </div>
      </div>
    </section>
  );
}
