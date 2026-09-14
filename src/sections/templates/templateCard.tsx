"use client";

import { TemplateType } from "@/data/TEMPLATED_DATA";
import { Button, Typography } from "@mui/material";
import clsx from "clsx";

import Image from "next/image";
import Link from "next/link";

type Props = {
  item: TemplateType;
};

export default function TemplateCard({ item }: Props) {
  return (
    <div
      className={clsx(
        "group shadow-card-small flex h-full w-full flex-col rounded-2xl",
        "bg-white p-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
      )}
    >
      <div
        className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-xl"
        style={{
          backgroundColor: `${item.color}30`,
        }}
      >
        <Image
          src={item.imageSrc}
          width={90}
          height={90}
          alt={item.title}
          className="w-15 object-contain transition-all duration-500 group-hover:scale-105 md:w-18"
        />
      </div>

      {/* content */}
      <div className="flex flex-1 flex-col items-center gap-5 pt-5">
        <Typography
          variant="h3"
          className="text-center text-sm font-bold text-gray-800 md:text-base"
        >
          {item.title}
        </Typography>

        <Button
          component={Link}
          href={item.link}
          fullWidth
          style={{
            backgroundColor: item.buttonColor,
            
          }}
          variant="contained"
          className={clsx(
            " rounded-xl py-2 text-sm font-semibold",
            " text-white shadow-none transition-all mt-auto hover:brightness-90",
          )}
        >
          مشاهده دمو
        </Button>
      </div>
    </div>
  );
}
