import HeroSection from "./components/herosection";
import { Partners } from "./components/partners";
import { Explore } from "./components/explore/explore";
import VideoSection from "./components/video";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <VideoSection />
      <Partners />
      <Explore />
    </main>
  );
}
