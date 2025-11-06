import EventCardsList from "./events/eventcardlist";
import Global from "./global";
import Image from "next/image";

export const Explore = () => {
  return (
    <div className="relative flex flex-col items-center w-full bg-[#FFFFFF] overflow-hidden pb-12">
        <div
            className="absolute bottom-0 left-0 w-full"
        />
      {/* CTA section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-10 mb-16 z-2">
        <Global />
        <EventCardsList />
      </div>
      <Image
        src="/footer/footer-bg.svg"
        alt="Background decorative gradient"
        fill
        priority
        fetchPriority="high"
        className="object-cover rounded-[32px]"
      />
    </div>
  );
};