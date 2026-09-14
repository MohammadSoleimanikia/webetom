"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useMount } from "@/hooks/useMount";

import { Button } from "@mui/material";
import NavBtn from "@/components/swiper/NavBtn";
import VocCard from "./VocCard";
import { VOICE_OF_CUSTOMERS } from "@/data/VOICE_OF_CUSTOMERS";
import VocSwiperSkeleton from "./vocSwiperSkeleton";
import TitleSection from "@/components/titleSection";
import { routes } from "@/const/links";
import Link from "next/link";

export default function VoiceOfCustomer() {
  const { isMounted } = useMount();

  return (
    <div>
      <TitleSection
        title="صدای مشتریان ما"
        subTitle="نظرات"
        actionButton={
          <Link href={routes.comments}>
          <Button variant="text" className="text-secondary text-sm text-nowrap">
            مشاهده همه نظرات
          </Button>
          </Link>
        }
      />

      <div className="flex w-full items-center gap-3">
        <NavBtn side="previous" nextEl="voc-next" previousEl="voc-prev" />

        {!isMounted ? (
          <VocSwiperSkeleton count={VOICE_OF_CUSTOMERS.length} />
        ) : (
          <div className="min-w-0 flex-1">
            <Swiper
              modules={[Navigation, Pagination]}
              grabCursor
              spaceBetween={16}
              slidesPerView={1}

              breakpoints={{
                560: {
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
                nextEl: ".voc-next",
                prevEl: ".voc-prev",
              }}

              pagination={{
                clickable: true,
                type: "bullets",
                el: ".voc-pagination",
              }}

              className="w-full px-2 py-3 pb-10!"
            >
              {VOICE_OF_CUSTOMERS.map((item, index) => (
                <SwiperSlide key={index} className="h-auto!">
                  <VocCard item={item} />
                </SwiperSlide>
              ))}

              <div className="swiper-pagination voc-pagination absolute right-0 bottom-1 left-0 flex justify-center gap-2" />
            </Swiper>
          </div>
        )}

        <NavBtn side="next" nextEl="voc-next" previousEl="voc-prev" />
      </div>
    </div>
  );
}
