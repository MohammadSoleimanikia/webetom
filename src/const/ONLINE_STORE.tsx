import { FeatureItem } from "./FEATURES";
import { TbClock24 } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { TbWallet } from "react-icons/tb";
import { TbShieldCheck } from "react-icons/tb";
import { ReactNode } from "react";

export type OnlineStoreType = {
  title: string | ReactNode;
  description: string;
  imageSrcMobile: string;
  imageSrcDesktop: string;
  imageSrcDesktopBg: string;
  link: string;
  items: FeatureItem[];
};
export const ONLINE_STORE: OnlineStoreType = {
  title: (
    <>
      مغازه تو <span className="text-secondary">آنلاین</span> کنیم
    </>
  ),
  description:
    "با سایت فروشگاهی آماده سایتوم، محصولاتت رو به هزاران مشتری جدید نمایش بدهه و فروش خودت رو چند برابر کن!",
  imageSrcMobile: "/images/onlineStore/onlineStoreCharacter.webp",
  imageSrcDesktop: "/images/onlineStore/onlineStoreCharacterDesktop.webp",
  imageSrcDesktopBg:"/images/onlineStore/onlineStoreCharacterDesktopBg.webp",
  link: "/",
  items: [
    { title: "اعتماد بیشتر مشتریان", icon: TbShieldCheck },

    { title: "هزینه کمتر نسبت به فضای فیزیکی", icon: TbWallet },

    { title: "دسترسی از همه جا", icon: TbWorld },

    { title: "فروش 24 ساعته", icon: TbClock24 },
  ],
};
