"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { BLOG_POSTS } from "@/data/BLOG_POSTS";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import NavBtn from "@/components/swiper/NavBtn";
import { useMount } from "@/hooks/useMount";

import { Button } from "@mui/material";
import BlogPostCard from "./blogPostCard";
import BlogPostSwiperSkeleton from "./blogPostSwiperSkeleton";
import TitleSection from "@/components/titleSection";
import Link from "next/link";
import { routes } from "@/const/links";
import { BOTTOM_MARGIN } from "@/const/LAYOUT";

export default function LatestBlogPosts() {
  const { isMounted } = useMount();

  return (
    // last item in homePage
    <div className={ BOTTOM_MARGIN}>
      <TitleSection
        title="آخرین مقالات وبلاگ"
        subTitle="وبلاگ"
        actionButton={
          <Link href={routes.blog}>
            <Button
              variant="text"
              className="text-secondary text-sm text-nowrap"
            >
              مشاهده همه مقالات
            </Button>
          </Link>
        }
      />

      <div className="flex w-full items-center gap-3">
        <NavBtn side="previous" nextEl="blog-next" previousEl="blog-prev" />

        {!isMounted ? (
          <BlogPostSwiperSkeleton count={BLOG_POSTS.length} />
        ) : (
          <div className="min-w-0 flex-1">
            <Swiper
              modules={[Navigation, Pagination]}
              grabCursor

              slidesPerView={1}
              spaceBetween={16}

              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },

                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },

                1280: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}

              navigation={{
                nextEl: ".blog-next",
                prevEl: ".blog-prev",
              }}

              pagination={{
                clickable: true,
                type: "bullets",
                el: ".blog-pagination",
              }}
              className="w-full px-2 py-3 pb-10!"
            >
              {BLOG_POSTS.map((item) => (
                <SwiperSlide key={item.title} className="h-auto!">
                  <BlogPostCard item={item} />
                </SwiperSlide>
              ))}

              <div className="swiper-pagination blog-pagination absolute right-0 bottom-1 left-0 flex justify-center gap-2" />
            </Swiper>
          </div>
        )}

        <NavBtn side="next" nextEl="blog-next" previousEl="blog-prev" />
      </div>
    </div>
  );
}
