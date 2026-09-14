import { ReactNode } from "react";
import { IconType } from "react-icons";
import { TbClock24, TbShieldCheck, TbWallet, TbWorld } from "react-icons/tb";

type OnlineStoreItem = {
  title: string;
  imageSrc: string;
  icon: IconType;
};
export type OnlineStoreType = {
  title: string | ReactNode;
  description: string;
  imageSrcMobile: string;
  imageSrcDesktop: string;
  imageSrcDesktopBg: string;
  link: string;
  items: OnlineStoreItem[];
};
export const ONLINE_STORE: OnlineStoreType = {
  title: (
    <>
      مغازه تو <span className="text-secondary">آنلاین</span> کنیم
    </>
  ),
  description: "با سایتوم،محصولاتت رو به مشتری نشون بده و فروشتو چند برابر کن!",
  imageSrcMobile: "/images/onlineStore/onlineStoreCharacter.webp",
  imageSrcDesktop: "/images/onlineStore/onlineStoreCharacterDesktop.webp",
  imageSrcDesktopBg: "/images/onlineStore/onlineStoreCharacterDesktopBg.webp",
  link: "/",
  items: [
    {
      title: "اعتماد بیشتر مشتریان",
      icon: TbShieldCheck,
      imageSrc: "/images/onlineStore/trust.webp",
    },

    {
      title: "هزینه کمتر نسبت به فضای فیزیکی",
      icon: TbWallet,
      imageSrc: "/images/onlineStore/money.webp",
    },

    {
      title: "دسترسی از همه جا",
      icon: TbWorld,
      imageSrc: "/images/onlineStore/web.webp",
    },

    {
      title: "فروش 24 ساعته",
      icon: TbClock24,
      imageSrc: "/images/onlineStore/24.webp",
    },
  ],
};
