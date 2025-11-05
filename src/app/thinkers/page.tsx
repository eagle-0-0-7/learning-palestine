import { MainContent } from "../components/thinkers/maincontent";
import { Heading } from "../components/thinkers/heading";
import { TopicTabs } from "../components/thinkers/topicstabs";

export default function Thinkers() {
  return (
    <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto gap-10 px-4 sm:px-8 md:px-16 lg:px-24 min-h-[300px]">
      <Heading />
      <TopicTabs />
      <MainContent />
    </div>
  );
}