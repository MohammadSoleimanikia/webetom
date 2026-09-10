"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { BLOG_POSTS } from "@/data/BLOG_POSTS";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NavBtn from "@/components/swiper/NavBtn";
import { useMount } from "@/hooks/useMount";

import { Button, Typography } from "@mui/material";
import BlogPostCard from "./blogPostCard";
import BlogPostSwiperSkeleton from "./blogPostSwiperSkeleton";

export default function LatestBlogPosts() {
  const { isMounted } = useMount();

  return (
    <div className="bg-background rounded-2xl py-5">
      <div className="mb-3 flex flex-col items-center gap-2 sm:relative sm:flex-row sm:justify-center md:mb-5">
        <Typography variant="h2" className="text-center">
          آخرین مقالات وبلاگ
        </Typography>

        <div className="w-full text-left sm:absolute sm:left-3 sm:w-auto">
          <Button variant="text" className="text-sm">
            مشاهده همه مقالات
          </Button>
        </div>
      </div>

      <div className="relative flex w-full items-center gap-4">
        <NavBtn side="previous"  />
        {!isMounted ? (
          <BlogPostSwiperSkeleton count={BLOG_POSTS.length}/>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, FreeMode]}
            freeMode
            slidesPerView="auto"
            spaceBetween={24}
            grabCursor
            className="px-2 pb-9!"
            navigation={{
              nextEl: ".template-next",
              prevEl: ".template-prev",
            }}
            pagination={{
              clickable: true,
              type: "bullets",
              el: ".template-pagination",
            }}
          >
            {BLOG_POSTS.map((item) => (
              <SwiperSlide
                key={item.title}
                className="h-auto! w-60! py-2 "
              >
                <BlogPostCard item={item}/>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination template-pagination absolute right-0 bottom-1 left-0 flex justify-center gap-2" />
          </Swiper>
        )}
        <NavBtn side="next" />
      </div>
    </div>
  );
}
