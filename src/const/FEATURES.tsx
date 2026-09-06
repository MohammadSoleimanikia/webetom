import type { IconType } from "react-icons";

import { PiHandshake } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { VscRocket } from "react-icons/vsc";

import { ReactNode } from "react";

export type FeatureItem = {
  title: ReactNode | string;
  icon: IconType;
  color?: string;
  description?: ReactNode | string;
};
export const FEATURES: FeatureItem[] = [
  {
    title: "تحویل حضوری",
    icon: PiHandshake,
    color: "text-custom-blue",
    description: "سایت و مدارک را حضوری تحویل میدهیم",
  },
  {
    title: "آموزش حضوری",
    icon: FaChalkboardTeacher,
    color: "text-custom-purple",
    description: "آموزش کامل کار با سایت به صورت حضوری",
  },
  {
    title: "قرارداد حضوری",
    icon: FaFileSignature,
    color: "text-secondary",
    description: "قرارداد  رسمی و شفاف به صورت حضوری ",
  },
  {
    title: "پشتیبانی حضوری",
    icon: MdSupportAgent,
    color: "text-custom-green",
    description: " پشتیبانی سریع و حضوری هر زمان که نیاز داشته باشید",
  },
  {
    title: (
      <>
        نصب در کمتر از <span className="text-secondary">24</span> ساعت
      </>
    ),
    icon: VscRocket,
    color: "text-custom-blue",
    description: (
      <>
        سایت شما در کمتر از <span className="text-secondary">24</span> ساعت
        آماده تحویل است
      </>
    ),
  },
];
