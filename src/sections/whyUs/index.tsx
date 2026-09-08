import WhyUsMobile from "./whyUsMobile";
import { WHY_US } from "@/const/WHYUS";
export default function WhyUs() {
  return <div className="w-full rounded-2xl ">
    <WhyUsMobile items={WHY_US}/>
  </div>;
}
