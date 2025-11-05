import HeroSection from "./hero/page";
import { Partners } from "./components/partners";
import { Explore } from "./components/explore/explore";
import VideoSection from "./components/video";

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
