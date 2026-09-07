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

export default function TemplateSection() {
  const { isMounted } = useMount();

  return (
    <div className="relative flex w-full items-center gap-4">
      <NavBtn
        side="previous"
        className=" "
      />
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
          <div className="swiper-pagination template-pagination absolute right-0 bottom-4 left-0 flex justify-center gap-2" />
        </Swiper>
      )}
      <NavBtn side="next" />
    </div>
  );
}
