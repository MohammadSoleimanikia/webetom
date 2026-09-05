import type { IconType } from "react-icons";

export type FeatureItem = {
  title: string;
  icon: IconType;
  color: string;
};
import { PiHandshake } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { VscRocket } from "react-icons/vsc";
export const HERO_FEATURES: FeatureItem[] = [
  {
    title: "تحویل حضوری",
    icon: PiHandshake,
    color: "text-custom-blue",
  },
  {
    title: "آموزش حضوری",
    icon: FaChalkboardTeacher,
    color: "text-custom-green",
  },
  {
    title: "قرارداد حضوری",
    icon: FaFileSignature,
    color: "text-custom-purple",
  },
  {
    title: "پشتیبانی حضوری",
    icon: MdSupportAgent,
    color: "text-custom-green",
  },
  {
    title: "نصب در کمتر از 24 ساعت",
    icon: VscRocket,
    color: "text-custom-blue",
  },
];
