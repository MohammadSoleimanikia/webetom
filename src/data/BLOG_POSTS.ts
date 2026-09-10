export type BlogPostType = {
  imageSrc: string;
  label: string;
  color: string;
  title: string;
  link:string;
  date: Date;
};

export const BLOG_POSTS: BlogPostType[] = [
  {
    link:'/',
    imageSrc: "/images/blogPost.webp",
    label: "بازاریابی",
    color: "secondary",
    title: "بهترین روش‌های بازاریابی دیجیتال در سال ۱۴۰۳",
    date: new Date("2024-05-21"),
  },
  {
    link:'/',
    imageSrc: "/images/blogPost.webp",
    label: "فروشگاه اینترنتی",
    color: "primary",
    title: "۱۰ ویژگی ضروری برای یک سایت فروشگاهی موفق",
    date: new Date("2024-05-25"),
  },
  {
    link:'/',
    imageSrc: "/images/blogPost.webp",
    label: "فروش آنلاین",
    color: "custom-green",
    title: "چگونه فروش اینترنتی خود را افزایش دهیم؟",
    date: new Date("2024-05-28"),
  },
  {
    link:'/',
    imageSrc: "/images/blogPost.webp",
    label: "مفید",
    color: "custom-purple",
    title: "راهنمای کامل سئو برای سایت فروشگاهی",
    date: new Date("2024-05-30"),
  },
];
