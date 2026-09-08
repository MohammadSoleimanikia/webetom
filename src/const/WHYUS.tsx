import { FeatureItem } from "./FEATURES";
import { TbShieldCheck } from "react-icons/tb";
import { VscRocket } from "react-icons/vsc";
import { MdOutlineDiscount } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoDiamondOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
export const WHY_US:FeatureItem[]=[
  {
    title: "طراحی حرفه ای",
    icon: IoDiamondOutline,
    description: "قالب های اختصاصی و واکنش گرا",
  },
  {
    title:"امنیت و پایداری" ,
    icon:TbShieldCheck ,
    description:"استفاده از سرورهای پر سرعت و گواهینامه SSL" ,
  },
  {
    title:"قیمت شفاف" ,
    icon: MdOutlineDiscount,
    description: "هزینه مشخص و بدون هزینه پنهان",
  },
  {
    title:"سرعت بالا " ,
    icon:VscRocket ,
    description: (
      <>
        نصب و راه‌اندازی در کمتر از <span className="text-secondary">24</span> ساعت
      </>
    ),
  },
  {
    title: "پشتیبانی واقعی",
    icon:MdSupportAgent ,
    description: "تیم پشتیبانی همیشه در کنار شما",
  },
  {
    title: "سئوی قوی",
    icon: TbSeo,
    description: "ساختار سئو شده برای گوگل",
  },
  {
    title:"حضور واقعی" ,
    icon:HiOutlineUserGroup ,
    description: "همراه شما در مشهد از آموزش تا پشتیبانی",
  },
]