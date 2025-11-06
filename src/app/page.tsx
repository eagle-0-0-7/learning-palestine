import HeroSection from "./components/herosection";
import { Partners } from "./components/partners";
import { Explore } from "./components/explore/explore";
import VideoSection from "./components/video";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Image
        src="/background-gradient.svg"
        alt="Background decorative gradient"
        fill
        priority
        fetchPriority="high"
        className="object-cover rounded-[32px] -z-10"
      />
      <HeroSection />
      <VideoSection />
      <Partners />
      <Explore />
    </main>
  );
}
