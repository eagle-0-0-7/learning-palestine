"use client";
import Image from "next/image";

export default function LearnMorePage() {
  return (
    <main
      role="main"
      aria-labelledby="pageTitle"
      className="flex flex-col w-full items-center justify-center bg-[#ededed]"
    >
      {/* Learn More Summary Section */}
      <section className="flex flex-col items-center text-center gap-4 sm:gap-6 pt-28 pb-20 md:pb-28 px-6">
        <h2
          id="pageTitle"
          className="font-poppins font-semibold text-4xl sm:text-5xl text-[#002B6B] leading-tight"
        >
          About Palestine&nbsp;101
        </h2>
        <p className="max-w-2xl font-manrope text-[#6B7280] text-base sm:text-lg leading-relaxed">
          A global education initiative by GHTech Inc. that weaves together history, resistance, and culture through immersive learning.
          {/* <br className="hidden sm:block" /> */}
          This initiative empowers learners to explore the roots of colonization, liberation movements, and digital equity, bridging critical scholarship with lived experience and community impact.
        </p>
      </section>

      {/* Mission + Vision */}
      <section
        aria-labelledby="missionVisionHeading"
        className="w-full max-w-5xl flex items-center justify-center py-16 px-6 bg-white rounded-3xl shadow-sm"
      >
        <h2 id="missionVisionHeading" className="sr-only">
          Mission {/* and Vision */}
        </h2>
        <div>
          <h3 className="text-4xl font-poppins text-center text-[#002B6B] mb-4">
            Our Mission
          </h3>
          <p className="max-w-2xl text-center text-[#374151] font-manrope leading-relaxed">
            To make transformative education accessible to everyone, combining
            scholarship, technology, and lived experience. We connect students
            with world-class educators who challenge narratives and inspire
            critical thinking.
          </p>
        </div>
      </section>

      {/* What Makes Palestine&nbsp;101 Unique */}
      <section className="w-full max-w-6xl py-24 px-6">
        <h3 className="text-2xl sm:text-3xl font-poppins text-center text-[#002B6B] mb-12">
          What Makes Palestine&nbsp;101 Unique
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Human-centered learning that builds reflection and cultural depth.",
            "Curricula developed with leading historians and scholars.",
            "Interactive storytelling and project-based education.",
            "Global classroom connections and community-based learning.",
            "Practical modules that link theory to real-world action.",
            "Accessible learning for all, anywhere, anytime.",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative flex-shrink-0 w-6 h-6 mt-1">
                <Image
                  src="/frame.svg"
                  alt="check image"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-[#374151] font-manrope">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* P101 Curriculum Journey with bottom gradient */}
      <section
        className="w-full pb-24 px-6 rounded-3xl"
      >
        <h3 className="text-2xl sm:text-3xl font-poppins text-center text-[#002B6B] mb-12 ">
          The Palestine&nbsp;101 Curriculum Journey
        </h3>
        <div className="grid sm:grid-cols-2 gap-8 pb-20">
          {[
            {
              title: "History & Context",
              desc:
                "Explore the cultural and historical foundations of Palestine.",
            },
            {
              title: "Media & Narrative",
              desc: "Analyze how stories are shaped, framed, and challenged.",
            },
            {
              title: "Global Solidarity",
              desc: "Connect with liberation movements worldwide.",
            },
            {
              title: "Action & Advocacy",
              desc: "Transform understanding into meaningful community action.",
            },
          ].map((mod, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-[#002B6B] mb-2">
                {mod.title}
              </h4>
              <p className="text-[#374151] font-manrope text-center">
                {mod.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
