import type { IconType } from "react-icons";
type MenuItem = {
  icon: IconType;
  title: string;
  link: string;
};
export type MenuType = {
  title: string;
  items: MenuItem[];
};

import {
  FiGrid,
  FiFileText,
  FiSettings,
  FiGlobe,
  FiBookOpen,
  FiInfo,
  FiShoppingBag,
  FiMonitor,
  FiHeadphones,
  FiRefreshCw,
  FiMapPin,
  FiPhone,
  FiSmartphone,
  FiMail,
} from "react-icons/fi";

export const FOOTER_MENUS: MenuType[] = [
  {
    title: "لینک‌های مفید",
    items: [
      {
        icon: FiGrid,
        title: "قالب‌ها",
        link: "/templates",
      },
      {
        icon: FiFileText,
        title: "تعرفه‌ها",
        link: "/pricing",
      },
      {
        icon: FiSettings,
        title: "امکانات",
        link: "/features",
      },
      {
        icon: FiGlobe,
        title: "نمونه سایت‌ها",
        link: "/portfolio",
      },
      {
        icon: FiBookOpen,
        title: "مقالات",
        link: "/blog",
      },
      {
        icon: FiInfo,
        title: "درباره ما",
        link: "/about",
      },
    ],
  },
  {
    title: "خدمات",
    items: [
      {
        icon: FiShoppingBag,
        title: "طراحی سایت فروشگاهی",
        link: "/services/ecommerce",
      },
      {
        icon: FiMonitor,
        title: "آموزش حضوری",
        link: "/services/training",
      },
      {
        icon: FiHeadphones,
        title: "پشتیبانی حضوری",
        link: "/services/support",
      },
      {
        icon: FiRefreshCw,
        title: "سئو و بهینه سازی",
        link: "/services/seo",
      },
      {
        icon: FiSmartphone,
        title: "اپلیکیشن PWA",
        link: "/services/pwa",
      },
    ],
  },
  {
    title: "تماس با ما",
    items: [
      {
        title: "مشهد، خیابان امام‌رضا،پلاک 173",
        icon: FiMapPin,
        link: "https://nshn.ir/48_b1dzq0JjxLY",
      },
      {
        title: "051-37063145",
        link: "tel:05137063145",
        icon: FiPhone,
      },
      {
        title: "0915-122-4567",
        icon: FiSmartphone,
        link: "tel:09151234567",
      },
      {
        title: "info@sitom.ir",
        icon: FiMail,
        link: "mailto:09151234567",
      },
    ],
  },
];
