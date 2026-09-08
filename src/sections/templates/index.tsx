"use client";

import TemplateCard from "./templateCard";
import { TEMPLATES_DATA } from "@/const/TEMPLATED_DATA";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NavBtn from "./NavBtn";
import { useMount } from "@/hooks/useMount";
import TemplateSectionSkeleton from "./templateSkeleton";
import { Button, Typography } from "@mui/material";

export default function TemplateSection() {
  const { isMounted } = useMount();

  return (
    <div className="bg-background rounded-2xl py-5">
      <div className="mb-3 flex flex-col items-center gap-2 sm:relative sm:flex-row sm:justify-center md:mb-5">
        <Typography variant="h2" className="text-center">
          قالب های آماده برای هر کسب و کار
        </Typography>

        <div className="w-full text-left sm:absolute sm:left-3 sm:w-auto">
          <Button variant="text" className="text-sm">
            مشاهده همه
          </Button>
        </div>
      </div>

      <div className="relative flex w-full items-center gap-4">
        <NavBtn side="previous" className=" " />
        {!isMounted ? (
          <TemplateSectionSkeleton items={TEMPLATES_DATA} />
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
            {TEMPLATES_DATA.map((item) => (
              <SwiperSlide
                key={item.title}
                className="h-auto! w-70! py-2 md:w-[320px]!"
              >
                <TemplateCard item={item} />
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
