export type SalesFeatType={
  title:string;
  description:string;
  iconSrc:string;
  color:string
}

export const SALES_FEATURES: SalesFeatType[] = [
  {
    title: "مدیریت محصولات",
    description: "افزودن نامحدود محصول",
    iconSrc: '/images/salesFeat/product.webp',
    color: "#FE720C",
  },
  {
    title: "مدیریت سفارشات",
    description: "مدیریت آسان سفارش‌ها",
    iconSrc: '/images/salesFeat/order.webp',
    color: "#0141C6",
  },
  {
    title: "پنل پیامکی",
    description: "ارسال پیامک‌ها به مشتریان",
    iconSrc: '/images/salesFeat/sms.webp',
    color: "#722CDB",
  },
  {
    title: "درگاه پرداخت آنلاین",
    description: "اتصال به تمامی درگاه‌های بانکی",
    iconSrc: '/images/salesFeat/pay.webp',
    color: "#039747",
  },
  {
    title: "پشتیبانی و آموزش حضوری",
    description: "همراه شما در مشهد",
    iconSrc: '/images/salesFeat/support.webp',
    color: "#F53641",
  },
  {
    title: "اپلیکیشن PWA",
    description: "نصب روی موبایل مثل اپ",
    iconSrc: '/images/salesFeat/pwa.webp',
    color: "#38BDF8",
  },
  {
    title: "سئو کاملاً بهینه",
    description: "ساختار سئو شده برای گوگل",
    iconSrc: '/images/salesFeat/seo.webp',
    color: "#0F2A4A",
  },
  {
    title: "طراحی واکنش‌گرا",
    description: "سازگار با موبایل و تبلت",
    iconSrc: '/images/salesFeat/responsive.webp',
    color: "#2072D9",
  },
];