import SectionWrapper from "@/components/sectionWrapper";
import Features from "@/sections/features";
import HeroSection from "@/sections/hero";
import TemplateSection from "@/sections/templates";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      {/* hero section ############################# */}
      <SectionWrapper className="relative overflow-hidden">
        {/* hero bg */}
        <div className="absolute inset-0 bg-[url('/images/hero/hero.webp')] bg-cover bg-center bg-no-repeat" />
        {/* fade mask bottom of hero */}
        <div className="absolute inset-x-0 bottom-0 z-1 h-40 bg-linear-to-t from-white via-white/50 to-transparent" />

        <div className="relative z-10">
          <HeroSection />
        </div>
      </SectionWrapper>

      {/*features section  */}
      <SectionWrapper>
        <Features />
      </SectionWrapper>

      {/* templates Slider section */}
      <SectionWrapper
        actionButton={
          <Button variant="text" className="text-sm">
            مشاهده همه
          </Button>
        }
        title="قالب های آماده برای هر کسب و کار"
      >
        <TemplateSection />
      </SectionWrapper>
    </>
  );
}
