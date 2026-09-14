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
    color: "#2072D9",
    description: "سایت و مدارک را حضوری تحویل می‌دهیم",
  },
  {
    title: "آموزش حضوری",
    icon: FaChalkboardTeacher,
    color: "#722CDB",
    description: "آموزش کامل کار با سایت به صورت حضوری",
  },
  {
    title: "قرارداد حضوری",
    icon: FaFileSignature,
    color: "#FE720C",
    description: "قرارداد رسمی و شفاف به صورت حضوری",
  },
  {
    title: "پشتیبانی حضوری",
    icon: MdSupportAgent,
    color: "#039747",
    description: "پشتیبانی سریع و حضوری هر زمان که نیاز داشته باشید",
  },
  {
    title: (
      <>
        نصب در کمتر از{" "}
        <span className="text-secondary text-base font-semibold md:text-lg md:font-semibold">
          24
        </span>{" "}
        ساعت
      </>
    ),
    icon: VscRocket,
    color: "#2072D9",
    description: (
      <>
        سایت شما در کمتر از{" "}
        <span className="text-secondary text-base sm:font-semibold">24</span>{" "}
        ساعت آماده تحویل است
      </>
    ),
  },
];
