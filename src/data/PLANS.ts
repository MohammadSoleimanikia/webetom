export type Plan = {
  title: string;
  description: string;
  color: string;
  isSpecial: boolean;
  price: number;
  items: string[];
  href: string;
};

export const PLANS: Plan[] = [
  {
    title: "حرفه‌ای",
    description: "مناسب کسب‌وکارهای بزرگ",
    color: "secondary",
    isSpecial: false,
    price: 19900000,
    items: [
      "قالب اختصاصی",
      "درگاه پرداخت",
      "پنل پیامکی پیشرفته",
      "اپلیکیشن PWA",
      "سئو حرفه‌ای",
      "آموزش و پشتیبانی ویژه حضوری",
      "تحویل در کمتر از 24 ساعت",
    ],
    href: "/plans/professional",
  },
  {
    title: "استاندارد",
    description: "پرفروش‌ترین پلن",
    color: "primary",
    isSpecial: true,
    price: 13900000,
    items: [
      "قالب حرفه‌ای‌تر",
      "درگاه پرداخت",
      "پنل پیامکی پیشرفته",
      "اپلیکیشن PWA",
      "آموزش و پشتیبانی حضوری",
      "تحویل در کمتر از 24 ساعت",
    ],
    href: "/plans/standard",
  },

  {
    title: "اقتصادی",
    description: "مناسب شروع کسب‌وکارهای نوپا",
    color: "custom-green",
    isSpecial: false,
    price: 9900000,
    items: [
      "قالب حرفه‌ای",
      "درگاه پرداخت",
      "پنل پیامکی",
      "آموزش و پشتیبانی حضوری",
      "تحویل در کمتر از 24 ساعت",
    ],
    href: "/plans/economic",
  },
];
