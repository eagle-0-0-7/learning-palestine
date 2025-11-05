import CTA from "../components/CTA";
import Thinkers from "../thinkers/page";

export default function HeroSection() {
  return (
    <section
          className="w-full overflow-visible pb-12 md:pb-28"
    //   className="relative min-h-[99vh] w-full bg-no-repeat bg-cover bg-center bg-[url('/background-gradient.svg')] overflow-visible pb-12 md:pb-28"
    //   style={{ backgroundImage: "url('/background-gradient.svg')" }}
    >
      <div className="container mx-auto flex flex-col px-6 pt-28">

        {/* CTA section */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mt-0 md:mt-10 mb-16">
          <CTA />
        </div>

        <Thinkers />
      </div>
    </section>
  );
}