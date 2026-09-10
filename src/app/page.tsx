import SectionWrapper from "@/components/sectionWrapper";
import OnlineStoreSection from "@/sections/onlineStore";
import Features from "@/sections/features";
import HeroSection from "@/sections/hero";
import SalesFeatures from "@/sections/salesFeatures";
import TemplateSection from "@/sections/templates";
import { Button } from "@mui/material";
import WhyUs from "@/sections/whyUs";
import Plans from "@/sections/plans";
import OrderProcess from "@/sections/orderProcess";
import FAQ from "@/sections/faq";
import VoiceOfCustomer from "@/sections/voiceOfCustomers";
import LatestBlogPosts from "@/sections/latestBlogPosts";

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
      <SectionWrapper containerClassName="bg-background md:bg-transparent ">
        <TemplateSection />
      </SectionWrapper>

      {/* sales feature section */}
      <SectionWrapper
        containerClassName="pt-3"
        title="امکاناتی که فروش شما را بیشتر می کند"
      >
        <SalesFeatures />
      </SectionWrapper>

      {/*  Online Store Section */}
      <SectionWrapper containerClassName="bg-primary md:bg-transparent pt-3 ">
        <OnlineStoreSection />
      </SectionWrapper>

      {/* why us section  */}
      <SectionWrapper className="bg-background md:bg-transparent">
        <WhyUs />
      </SectionWrapper>

      {/* Plans */}
      <SectionWrapper title="پلن های سایت فروشگاهی ">
        <Plans />
      </SectionWrapper>

      {/* order process  */}
      <SectionWrapper containerClassName="bg-background md:bg-transparent ">
        <OrderProcess />
      </SectionWrapper>

      {/* FAQ section */}
      <SectionWrapper className="bg-background md:bg-transparent">
        <FAQ />
      </SectionWrapper>

      {/* Voice of customers section */}
      <SectionWrapper>
        <VoiceOfCustomer />
      </SectionWrapper>

      {/* templates Slider section */}
      <SectionWrapper containerClassName="bg-background md:bg-transparent ">
        <LatestBlogPosts />
      </SectionWrapper>
    </>
  );
}
