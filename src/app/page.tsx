import SectionWrapper from "@/components/sectionWrapper";
import Features from "@/sections/features";
import HeroSection from "@/sections/hero";
import TemplateSection from "@/sections/templates";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      {/* hero section ############################# */}
      <SectionWrapper className="bg-gradient-primary">
        <HeroSection />
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
