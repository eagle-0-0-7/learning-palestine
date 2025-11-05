import Image from "next/image";

export interface EventCardData {
  date: string;
  location: string;
  city: string;
  imageUrl: string;
  link?: string;
}

type Props = {
  data: EventCardData;
  className?: string;
  onClick?: () => void;
  tabIndex?: number;
  ariaPressed?: boolean;
};

export default function EventCard({
  data,
  className = "",
  onClick,
  tabIndex = 0,
  ariaPressed,
}: Props) {
  return (
    <div className="relative w-[90vw] max-w-[920px] mx-auto">
      {/* Purple accent behind card */}
      <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-[90%] h-[8px] bg-[#865cd0] rounded-full" />
      {/* Main card */}
      <div
        role="button"
        tabIndex={tabIndex}
        aria-pressed={ariaPressed}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick?.();
          }
        }}
        className={[
          "relative overflow-hidden rounded-2xl shadow-md",
          "w-full cursor-pointer",
          "bg-[linear-gradient(to_right,_#555_0%,_#333_25%,_#000_50%)]",
          "transition-transform duration-300 ease-out hover:scale-[1.01]",
          className,
        ].join(" ")}
      >
        {/* Background image overlay on the right */}
        <div className="absolute inset-0">
          {/* Mobile: full-width background image */}
          <div className="absolute inset-0 bg-black md:hidden">
            <Image
              src={data.imageUrl}
              alt="event image"
              fill
              className="object-cover p-1"
              draggable={false}
            />
            <div className="absolute inset-0 bg-black/66" />
          </div>
          {/* Desktop: right-half image, no overlay */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-1/2 rounded-r-2xl md:top-0 md:translate-y-0 md:h-full md:mr-10 overflow-hidden">
            <Image
              src={data.imageUrl}
              alt="event image"
              fill
              className="object-contain md:object-cover"
              draggable={false}
            />
          </div>
        </div>
        {/* Text content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-10 py-6 text-white">
          {/* Date + Month */}
          <div className="flex flex-row sm:flex-col items-baseline gap-2 mb-3">
            {data.date && (
              <div className="text-xs sm:text-xs md:text-sm uppercase tracking-wider text-gray-300">
                {data.date}
              </div>
            )}
          </div>
          {/* Title + Location */}
          <div className="text-left w-full md:w-auto">
            <div className="text-lg font-semibold">{data.location}</div>
            <div className="text-sm text-gray-300">{data.city}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
