
import { FeatureItem } from "./FEATURES";
import { FiMonitor } from "react-icons/fi";
import { HiOutlineCreditCard } from "react-icons/hi2";

import { PiGiftThin } from "react-icons/pi";
import { TbSend } from "react-icons/tb";

export const ORDER_PROCESS: FeatureItem[] = [
  {
    title: "انتخاب قالب و پلن",
    icon: FiMonitor,
    description: "قالب مورد نظر و پلن مناسب را انتخاب کنید",
  },
  {
    title: "پرداخت و ثبت سفارش",
    icon: HiOutlineCreditCard,
    description: "سفارش خود را ثبت و پرداخت کنید ",
  },
  {
    title: "ارسال اطلاعات ",
    icon: TbSend    ,
    description: "اطلاعات کسب‌و‌کار و محصولات خود را ارسال کنید",
  },
  {
    title: "تحویل حضوری",
    icon: PiGiftThin ,
    description: "سایت شما در کمتر از 24 ساعت آماده و تحویل حضوری میشود",
  },
];
