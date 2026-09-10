import { IconType } from "react-icons";

import { RiShoppingBagLine } from "react-icons/ri";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoBrushOutline } from "react-icons/io5";
import { GiRunningShoe } from "react-icons/gi";
import { TbPerfume } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";

export type TemplateType = {
  title: string;
  imageSrc: string;
  icon: IconType;
  color: string;
  link: string;
};

export const TEMPLATES_DATA: TemplateType[] = [
  {
    title: "سوپر مارکت",
    imageSrc: "/images/webCard.webp",
    link: "/",
    color: "#0141C6",
    icon: MdOutlineLocalGroceryStore,
  },
  {
    title: "آرایشی بهداشتی",
    imageSrc: "/images/webCard.webp",
    link: "/",
    color: "#FE720C",
    icon: IoBrushOutline,
  },
  {
    title: "کیف و کفش",
    imageSrc: "/images/webCard.webp",
    link: "/",
    color: "#722CDB",
    icon: GiRunningShoe,
  },
  {
    title: "عطر و ادکلن",
    imageSrc: "/images/webCard.webp",
    link: "/",
    color: "#039747",
    icon: TbPerfume,
  },
  {
    title: "موبایل و دیجیتال",
    imageSrc: "/images/webCard.webp",
    link: "/",
    color: "#2072D9",
    icon: CiMobile3,
  },
  {
    title: "زیبایی و آرایشی",
    imageSrc: "/images/webCard.webp",
    link: "/",
    color: "#F53641",
    icon: RiShoppingBagLine,
  },
  {
    title: "آرایشی",
    imageSrc: "/images/webCard.webp",
    link: "/",
    color: "#38BDF8",
    icon: RiShoppingBagLine,
  },
];