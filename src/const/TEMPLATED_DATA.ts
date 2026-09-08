import { IconType } from "react-icons";
import { RiShoppingBagLine } from "react-icons/ri";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoBrushOutline } from "react-icons/io5";
import { GiRunningShoe } from "react-icons/gi";
import { TbPerfume } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
export type TemplateType={
  title:string;
  imageSrc:string;
  icon:IconType;
  color:string;
  link:string;
}
export const TEMPLATES_DATA:TemplateType[]=[
  {
    title:"سوپر مارکت",
    imageSrc:'/images/webCard.webp',
    link:"/",
    color:'text-primary',
    icon:MdOutlineLocalGroceryStore
  },
  {
    title:"آرایشی بهداشتی",
    imageSrc:'/images/webCard.webp',
    link:"/",
    color:'text-secondary',
    icon:IoBrushOutline
  },
  {
    title:"کیف و کفش",
    imageSrc:'/images/webCard.webp',
    link:"/",
    color:'text-custom-purple',
    icon:GiRunningShoe
  },
  {
    title:"عطر وادکلن",
    imageSrc:'/images/webCard.webp',
    link:"/",
    color:'text-custom-green',
    icon:TbPerfume
  },
  {
    title:"موبایل و دیجیتال",
    imageSrc:'/images/webCard.webp',
    link:"/",
    color:'text-custom-blue',
    icon:CiMobile3
  },
  {
    title:"زیبایی و آرایشی",
    imageSrc:'/images/webCard.webp',
    link:"/",
    color:'text-custom-red',
    icon:RiShoppingBagLine
  },
  {
    title:" آرایشی",
    imageSrc:'/images/webCard.webp',
    link:"/",
    color:'text-secondary',
    icon:RiShoppingBagLine
  },
]