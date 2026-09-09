import WhyUsDesktop from "./whyUsDesktop";
import WhyUsMobile from "./whyUsMobile";
import { WHY_US } from "@/data/WHYUS";
export default function WhyUs() {
  return <div className="w-full rounded-2xl pb-5 md:bg-background">
    <WhyUsMobile items={WHY_US}/>
    <WhyUsDesktop items={WHY_US}/>

  </div>;
}
