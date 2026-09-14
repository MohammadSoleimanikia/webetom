import { FeatureItem } from "./FEATURES";
import { TbPalette, TbRocket, TbShieldCheck, TbTags } from "react-icons/tb";

import { HiOutlineUserGroup } from "react-icons/hi2";
import { TbHeadset } from "react-icons/tb";
import { TbSeo } from "react-icons/tb";

export const WHY_US: FeatureItem[] = [
  {
    title: "طراحی حرفه‌ای",
    icon: TbPalette ,
    description: "قالب‌های اختصاصی و واکنش‌گرا",
    color: "#2072D9",
  },
  {
    title: "امنیت و پایداری",
    icon: TbShieldCheck,
    description: "استفاده از سرورهای پرسرعت و گواهینامه SSL",
    color: "#722CDB",
  },
  {
    title: "قیمت شفاف",
    icon: TbTags ,
    description: "هزینه مشخص و بدون هزینه پنهان",
    color: "#039747",
  },
  {
    title: "سرعت بالا",
    icon: TbRocket ,
    description: (
      <>
        نصب و راه‌اندازی در کمتر از{" "}
        <span className="text-secondary font-bold">24</span> ساعت
      </>
    ),
    color: "#F53641",
  },
  {
    title: "پشتیبانی واقعی",
    icon: TbHeadset,
    description: "تیم پشتیبانی همیشه در کنار شما",
    color: "#0141C6",
  },
  {
    title: "سئوی قوی",
    icon: TbSeo,
    description: "ساختار سئو شده برای گوگل",
    color: "#FE720C",
  },
  {
    title: "حضور واقعی",
    icon: HiOutlineUserGroup,
    description: "همراه شما در مشهد از آموزش تا پشتیبانی",
    color: "#38BDF8",
  },
];