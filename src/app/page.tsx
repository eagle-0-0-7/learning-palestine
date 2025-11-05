import Image from "next/image";
import HeroSection from "./hero/page";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
    </main>
  );
}
