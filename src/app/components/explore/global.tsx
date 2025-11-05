"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Global() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-[90%] sm:max-w-3xl md:max-w-4xl text-center flex flex-col items-center">
      {/* Chip */}
      <div
        onClick={() => router.push("/signup")}
        className="
          cursor-pointer select-none inline-flex items-center gap-2 rounded-3xl
          border border-[#f0f5ff] bg-white/80 backdrop-blur-sm
          px-4 py-1.5 sm:px-6 sm:py-2
          shadow-[0_0_15px_-5px_#865CD0]
          transition-all duration-300
          hover:shadow-none hover:[box-shadow:inset_0_0_25px_#865CD0]
          focus:outline-none focus:ring-2 focus:ring-[#865CD0]/50
        "
      >
        <div className="relative h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0">
          <Image
            src="/gis--globe-share-1.svg"
            alt="Globe icon"
            fill
            className="object-contain"
          />
        </div>
        <span className="font-manrope text-sm sm:text-base text-[#5212C1] font-semibold">
          Subscribe for Course Alerts
        </span>
      </div>

      {/* Heading */}
      <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight text-[#002B6B] tracking-tight">
        Learning for Palestine
      </h1>

      {/* Subheading */}
      <p className="mt-3 sm:mt-4 max-w-sm sm:max-w-md md:max-w-lg text-sm sm:text-base md:text-lg leading-relaxed text-[#414d60] font-manrope">
        Explore the History, National Culture, and Global Context of Palestine.
      </p>
    </div>
  );
}
