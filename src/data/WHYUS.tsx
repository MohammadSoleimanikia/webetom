import { FeatureItem } from "./FEATURES";
import { TbShieldCheck } from "react-icons/tb";
import { IoRocketOutline } from "react-icons/io5";
import { IoPricetagsOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbHeadset } from "react-icons/tb";
import { TbSeo } from "react-icons/tb";
export const WHY_US:FeatureItem[]=[
  {
    title: "طراحی حرفه ای",
    icon: IoColorPaletteOutline,
    description: "قالب های اختصاصی و واکنش گرا",
    color:'text-custom-blue'
  },
  {
    title:"امنیت و پایداری" ,
    icon:TbShieldCheck ,
    description:"استفاده از سرورهای پر سرعت و گواهینامه SSL" ,
    color:'text-custom-purple'
  },
  {
    title:"قیمت شفاف" ,
    icon: IoPricetagsOutline,
    description: "هزینه مشخص و بدون هزینه پنهان",
    color:'text-custom-green'
  },
  {
    title:"سرعت بالا " ,
    icon:IoRocketOutline ,
    description: (
      <>
        نصب و راه‌اندازی در کمتر از <span className="text-secondary">24</span> ساعت
      </>
    ),
    color:'text-custom-red'
  },
  
  {
    title: "پشتیبانی واقعی",
    icon:TbHeadset ,
    description: "تیم پشتیبانی همیشه در کنار شما",
    color:'text-primary'
  },
  {
    title: "سئوی قوی",
    icon: TbSeo,
    description: "ساختار سئو شده برای گوگل",
    color:'text-secondary'
  },
  {
    title:"حضور واقعی" ,
    icon:HiOutlineUserGroup ,
    description: "همراه شما در مشهد از آموزش تا پشتیبانی",
    color:'text-custom-green'
  },
]