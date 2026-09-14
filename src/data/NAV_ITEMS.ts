import { routes } from "@/const/links";
import { IconType } from "react-icons";
import { TbHome } from "react-icons/tb";
import { TbTemplate } from "react-icons/tb";
import { TbTags } from "react-icons/tb";
import { TbDeviceImac } from "react-icons/tb";
import { TbArticle } from "react-icons/tb";
import { TbUser } from "react-icons/tb";
import { TbPhone } from "react-icons/tb";
type NavItemType={
  label:string;
  href:string;
  icon:IconType
}
export const NAV_ITEM:NavItemType[] = [
  {
    label: "صفحه اصلی",
    href: routes.home,
    icon:TbHome
  },
  {
    label: "قالب ها",
    href: routes.templates,
    icon:TbTemplate
  },
  {
    label: "تعرفه ها",
    href: "/price",
    icon:TbTags
  },
  
  {
    label: "نمونه سایت ها ",
    href: "/samples",
    icon:TbDeviceImac
  },
  {
    label: "مقالات",
    href: "/blog",
    icon:TbArticle
  },
  {
    label: "درباره ما ",
    href: "/about-us",
    icon:TbUser
  },
  {
    label: "تماس با ما ",
    href: "/contact-us",
    icon:TbPhone
  },
];