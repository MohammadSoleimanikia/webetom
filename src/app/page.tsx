import SectionWrapper from "@/components/sectionWrapper";
import Features from "@/sections/features";
import HeroSection from "@/sections/hero";

export default function Home() {
  return (
    <>
      <SectionWrapper className="bg-gradient-primary">
        <HeroSection />
      </SectionWrapper>
      <SectionWrapper>
        <Features />
      </SectionWrapper>
    </>
  );
}
