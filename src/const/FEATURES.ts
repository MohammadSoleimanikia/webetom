import type { IconType } from "react-icons";

export type FeatureItem = {
  title: string;
  icon: IconType;
  color?: string;
  description?: string;
};
import { PiHandshake } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { VscRocket } from "react-icons/vsc";
export const FEATURES: FeatureItem[] = [
  {
    title: "تحویل حضوری",
    icon: PiHandshake,
    color: "text-custom-blue",
    description:"سایت و مدارک را حضوری تحویل می دهیم"
  },
  {
    title: "آموزش حضوری",
    icon: FaChalkboardTeacher,
    color: "text-custom-purple",
    description:"آموزش کامل کار با سایت به صورت حضوری"
  },
  {
    title: "قرارداد حضوری",
    icon: FaFileSignature,
    color: "text-secondary",
    description:'قرارداد  رسمی و شفاف به صورت حضوری '
  },
  {
    title: "پشتیبانی حضوری",
    icon: MdSupportAgent,
    color: "text-custom-green",
    description:' پشتیبانی سریع و حضوری هر زمان که نیاز داشته باشید'
  },
  {
    title: "نصب در کمتر از 24 ساعت",
    icon: VscRocket,
    color: "text-custom-blue",
    description:'سایت شما در کمتر از 24 ساعت آماده تحویل است'
  },
];
