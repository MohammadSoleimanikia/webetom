"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useMount } from "@/hooks/useMount";

import { Button, Typography } from "@mui/material";
import NavBtn from "@/components/swiper/NavBtn";
import VocCard from "./VocCard";
import { VOICE_OF_CUSTOMERS } from "@/data/VOICE_OF_CUSTOMERS";

export default function VoiceOfCustomer() {
  const { isMounted } = useMount();

  return (
    <div className="rounded-2xl py-5">
      <div className="mb-3 flex flex-col items-center gap-2 sm:relative sm:flex-row sm:justify-center md:mb-5">
        <Typography variant="h2" className="text-center">
          صدای مشتریان ما
        </Typography>

        <div className="w-full text-left sm:absolute sm:left-3 sm:w-auto">
          <Button variant="text" className="text-sm">
            مشاهده همه نظرات
          </Button>
        </div>
      </div>

      <div className="relative flex w-full items-center gap-4">
        <NavBtn side="previous" />
        {!isMounted ? (
          <>Skeleton</>
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
            {VOICE_OF_CUSTOMERS.map((item,index) => (
              <SwiperSlide
                key={index}
                className="h-auto! w-70! py-2 md:w-[320px]!"
              >
                {/* customer voice Card */}
                <VocCard item={item}/>
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
