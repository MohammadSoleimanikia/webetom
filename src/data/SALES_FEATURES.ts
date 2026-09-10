import { FeatureItem } from "./FEATURES";

import { RiShoppingBagLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { LiaSmsSolid } from "react-icons/lia";
import { MdPayment } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { SiPwa } from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { IoDesktopSharp } from "react-icons/io5";

export const SALES_FEATURES: FeatureItem[] = [
  {
    title: "مدیریت محصولات",
    description: "افزودن نامحدود محصول",
    icon: RiShoppingBagLine,
    color: "#FE720C",
  },
  {
    title: "مدیریت سفارشات",
    description: "مدیریت آسان سفارش‌ها",
    icon: IoCartOutline,
    color: "#0141C6",
  },
  {
    title: "پنل پیامکی",
    description: "ارسال پیامک‌ها به مشتریان",
    icon: LiaSmsSolid,
    color: "#722CDB",
  },
  {
    title: "درگاه پرداخت آنلاین",
    description: "اتصال به تمامی درگاه‌های بانکی",
    icon: MdPayment,
    color: "#039747",
  },
  {
    title: "پشتیبانی و آموزش حضوری",
    description: "همراه شما در مشهد",
    icon: MdSupportAgent,
    color: "#F53641",
  },
  {
    title: "اپلیکیشن PWA",
    description: "نصب روی موبایل مثل اپ",
    icon: SiPwa,
    color: "#38BDF8",
  },
  {
    title: "سئو کاملاً بهینه",
    description: "ساختار سئو شده برای گوگل",
    icon: TbSeo,
    color: "#0F2A4A",
  },
  {
    title: "طراحی واکنش‌گرا",
    description: "سازگار با موبایل و تبلت",
    icon: IoDesktopSharp,
    color: "#2072D9",
  },
];