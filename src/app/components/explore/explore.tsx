import EventCardsList from "./events/eventcardlist";
import Global from "./global";

export const Explore = () => {
  return (
    <div className="relative flex flex-col items-center w-full bg-[#FFFFFF] overflow-hidden pb-12">
        <div
            className="absolute bottom-0 left-0 w-full"
            // style={{
            //     height: "60%", // how tall the gradient should rise
            //     backgroundImage: "url('/footer/footer-bg.svg')",
            //     backgroundSize: "cover",
            //     backgroundPosition: "bottom center",
            //     backgroundRepeat: "no-repeat",
            //     pointerEvents: "none",
            // }}
        />
      {/* CTA section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-10 mb-16">
        <Global />
        <EventCardsList />
      </div>
    </div>
  );
};