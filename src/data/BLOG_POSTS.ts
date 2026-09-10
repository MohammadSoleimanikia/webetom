export type BlogPostType = {
  imageSrc: string;
  label: string;
  color: string;
  title: string;
  link: string;
  date: Date;
};

export const BLOG_POSTS: BlogPostType[] = [
  {
    link: "/",
    imageSrc: "/images/blogPost.webp",
    label: "بازاریابی",
    color: "#FE720C",
    title: "۷ روش کاربردی برای افزایش فروش با بازاریابی دیجیتال",
    date: new Date("2024-05-21"),
  },
  {
    link: "/",
    imageSrc: "/images/blogPost.webp",
    label: "فروشگاه اینترنتی",
    color: "#0141C6",
    title: "۱۰ ویژگی ضروری که هر سایت فروشگاهی موفق باید داشته باشد",
    date: new Date("2024-05-25"),
  },
  {
    link: "/",
    imageSrc: "/images/blogPost.webp",
    label: "فروش آنلاین",
    color: "#039747",
    title: "چطور فروش آنلاین خود را بدون افزایش هزینه تبلیغات بیشتر کنیم؟",
    date: new Date("2024-05-28"),
  },
  {
    link: "/",
    imageSrc: "/images/blogPost.webp",
    label: "سئو",
    color: "#722CDB",
    title: "راهنمای کامل سئو سایت فروشگاهی برای افزایش بازدید گوگل",
    date: new Date("2024-05-30"),
  },
  {
    link: "/",
    imageSrc: "/images/blogPost.webp",
    label: "طراحی سایت",
    color: "#0F2A4A",
    title: "اصول طراحی یک سایت حرفه‌ای که اعتماد مشتری را جلب می‌کند",
    date: new Date("2024-06-02"),
  },
  {
    link: "/",
    imageSrc: "/images/blogPost.webp",
    label: "تجربه کاربری",
    color: "#38BDF8",
    title: "چگونه تجربه کاربری بهتر باعث افزایش نرخ تبدیل سایت می‌شود؟",
    date: new Date("2024-06-05"),
  },
  {
    link: "/",
    imageSrc: "/images/blogPost.webp",
    label: "افزایش فروش",
    color: "#F53641",
    title: "۵ اشتباه رایج در فروش اینترنتی که باعث از دست رفتن مشتری می‌شود",
    date: new Date("2024-06-08"),
  },
];
