import HeroSection from "./components/herosection";
import { Partners } from "./components/partners";
import { Explore } from "./components/explore/explore";
import VideoSection from "./components/video";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Image
        src="/background-gradient.webp"
        alt="Background decorative gradient"
        fill
        priority
        fetchPriority="high"
        className="rounded-[32px] min-h-[40vh] md:min-h-[99vh] -z-10 object-cover blur-[122px]"
      />
      <HeroSection />
      <VideoSection />
      <Partners />
      <Explore />
    </main>
  );
}
