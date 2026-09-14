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
import clsx from "clsx";
import { padding } from "@/const/LAYOUT";


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
      <SectionWrapper >
        <Features />
      </SectionWrapper>

      {/* templates Slider section */}
      <SectionWrapper containerClassName="relative">
        <TemplateSection />
      </SectionWrapper>

      {/* sales feature section */}
      <SectionWrapper>
        <SalesFeatures />
      </SectionWrapper>

    {/*  Online Store Section */}
      <SectionWrapper
        containerClassName={clsx("bg-primary md:bg-transparent md:py-0")}
      >
        <OnlineStoreSection />
      </SectionWrapper>

      {/* why us section  */}
      <SectionWrapper className={clsx(" ")}>
        <WhyUs />
      </SectionWrapper>

      {/* Plans */}
      <SectionWrapper>
        <Plans />
      </SectionWrapper>

      {/* order process  */}
      <SectionWrapper >
        <OrderProcess />
      </SectionWrapper>

      {/* FAQ section */}
      <SectionWrapper >
        <FAQ />
      </SectionWrapper>

      {/* Voice of customers section */}
      <SectionWrapper containerClassName="relative">
        <VoiceOfCustomer />
      </SectionWrapper>

      {/* latest blog Slider section */}
      <SectionWrapper containerClassName="relative">
        <LatestBlogPosts />
      </SectionWrapper>
    </>
  );
}
