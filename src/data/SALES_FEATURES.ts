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
    description: "افزودن نامحدود محصول ",
    icon: RiShoppingBagLine,
    color: "text-secondary",
  },
  {
    title: "مدیریت سفارشات",
    description: "مدیریت آسان سفارش ها",
    icon: IoCartOutline,
    color: "text-primary",
  },
  {
    title: "پنل پیامکی",
    description: "ارسال پیامک‌ها به مشتریان",
    icon: LiaSmsSolid,
    color: "text-custom-purple",
  },
  {
    title: "درگاه پرداخت آنلاین",
    description:"اتصال به تمامی درگاه های بانکی ",
    icon: MdPayment,
    color: "text-custom-green",
  },
  {
    title: "پشتیبانی و آموزش حضوری",
    description: "همراه شما در مشهد",
    icon: MdSupportAgent,
    color: "text-custom-red",
  },
  {
    title: "اپلیکیشن PWA",
    description: "نصب روی موبایل مثل اپ",
    icon: SiPwa,
    color: "text-custom-purple",
  },
  {
    title: "سئو کاملاً بهینه",
    description: "ساختار سئو شده برای گوگل",
    icon: TbSeo,
    color: "text-custom-green",
  },
  {
    title: "طراحی واکنش‌گرا",
    description: "سازگار با موبایل و تبلت",
    icon: IoDesktopSharp,
    color: "text-primary",
  },
];
