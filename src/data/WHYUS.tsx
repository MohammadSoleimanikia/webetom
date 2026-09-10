import { FeatureItem } from "./FEATURES";
import { TbShieldCheck } from "react-icons/tb";
import { IoRocketOutline } from "react-icons/io5";
import { IoPricetagsOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbHeadset } from "react-icons/tb";
import { TbSeo } from "react-icons/tb";

export const WHY_US: FeatureItem[] = [
  {
    title: "طراحی حرفه‌ای",
    icon: IoColorPaletteOutline,
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
    icon: IoPricetagsOutline,
    description: "هزینه مشخص و بدون هزینه پنهان",
    color: "#039747",
  },
  {
    title: "سرعت بالا",
    icon: IoRocketOutline,
    description: (
      <>
        نصب و راه‌اندازی در کمتر از{" "}
        <span className="text-secondary">24</span> ساعت
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