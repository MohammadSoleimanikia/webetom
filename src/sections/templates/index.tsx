"use client";

import TemplateCard from "./templateCard";
import { TEMPLATES_DATA } from "@/data/TEMPLATED_DATA";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import NavBtn from "@/components/swiper/NavBtn";
import { useMount } from "@/hooks/useMount";

import { Button, Link } from "@mui/material";
import TemplateSwiperSkeleton from "./templateSwiperSkeleton";
import TitleSection from "@/components/titleSection";
import { routes } from "@/const/links";

export default function TemplateSection() {
  const { isMounted } = useMount();

  return (
    <div className="rounded-2xl">
      <TitleSection
        title="قالب های آماده برای هر کسب و کار"
        subTitle="قالب های آماده ما"
        actionButton={
          <Link href={routes.templates}>
            <Button
              variant="text"
              className="text-secondary text-sm text-nowrap"
            >
              مشاهده همه
            </Button>
          </Link>
        }
      />

      <div className="flex w-full items-center gap-3">
        <NavBtn
          nextEl="template-next"
          previousEl="template-prev"
          side="previous"
        />

        {!isMounted ? (
          <TemplateSwiperSkeleton count={TEMPLATES_DATA.length ?? 4} />
        ) : (
          <div className="min-w-0 flex-1">
            <Swiper
              modules={[Navigation, Pagination]}
              grabCursor
              spaceBetween={16}
              slidesPerView={2}

              breakpoints={{
                680: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },

                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },

                1280: {
                  slidesPerView: 5,
                  spaceBetween: 24,
                },
              }}

              navigation={{
                nextEl: ".template-next",
                prevEl: ".template-prev",
              }}

              pagination={{
                clickable: true,
                type: "bullets",
                el: ".template-pagination",
              }}

              className="w-full px-2 py-3 pb-10!"
            >
              {TEMPLATES_DATA.map((item) => (
                <SwiperSlide key={item.title} className="h-auto! py-2">
                  <TemplateCard item={item} />
                </SwiperSlide>
              ))}

              <div className="swiper-pagination template-pagination absolute right-0 bottom-1 left-0 flex justify-center gap-2" />
            </Swiper>
          </div>
        )}

        <NavBtn nextEl="template-next" previousEl="template-prev" side="next" />
      </div>
    </div>
  );
}
