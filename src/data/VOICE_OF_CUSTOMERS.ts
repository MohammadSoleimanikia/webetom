export type CustomerComment = {
  avatarSrc: string;
  name: string;
  profession: string;
  comment: string;
  rating: number;
};

export const VOICE_OF_CUSTOMERS: CustomerComment[] = [
  {
    avatarSrc: "/images/avatar.webp",
    name: "محمد حسین‌پور",
    profession: "فروشگاه موبایل",
    comment:
      "سایت خیلی سریع و حرفه‌ای تحویل شد، تیم پشتیبانی هم واقعاً عالی هستند.",
    rating: 5,
  },
  {
    avatarSrc: "/images/avatar.webp",
    name: "الهام کاظمی",
    profession: "کارشناس عطر",
    comment:
      "آموزش حضوری خیلی بهم کمک کرد به راحتی خودم محتواهایم رو مدیریت می‌کنم.",
    rating: 5,
  },
  {
    avatarSrc: "/images/avatar.webp",
    name: "حسین مرادی",
    profession: "فروشگاه پولاد",
    comment:
      "از قرارداد حضوری و پشتیبانی حضوری خیلی راضی‌ام. حس اعتماد کامل دارم.",
    rating: 5,
  },
  {
    avatarSrc: "/images/avatar.webp",
    name: "مریم رضایی",
    profession: "فروشگاه آرایشی",
    comment:
      "ظاهر سایت فوق‌العاده‌ست و فروش آنلاینمون بعد از راه‌اندازی چند برابر شد.",
    rating: 5,
  },
];
