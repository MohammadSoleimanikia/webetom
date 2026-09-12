"use client";

import { BlogPostType } from "@/data/BLOG_POSTS";
import { dateFormatter } from "@/utils/dateFormatter";
import { Typography } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LiaCalendarWeekSolid } from "react-icons/lia";

type Props = {
  item: BlogPostType;
};

export default function BlogPostCard({ item }: Props) {
  return (
    <Link
      href={item.link}
      className={clsx(
        "group block overflow-hidden rounded-3xl",
        "border border-slate-100 bg-white",
        "shadow-card-extra-small",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg",
      )}
    >
      {/* image */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* category */}
        <div
          className="absolute top-3 right-5 rounded-full px-3 py-1 text-xs font-bold text-white backdrop-blur-sm"
          style={{
            backgroundColor: `${item.color}dd`,
          }}
        >
          {item.label}
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col gap-3 p-5">
        {/* date */}
        <Typography className="flex items-center gap-1 text-xs text-slate-400">
          <LiaCalendarWeekSolid />
          {dateFormatter(item.date)}
        </Typography>

        {/* title */}
        <Typography
          variant="h6"
          className="line-clamp-2 text-base leading-relaxed font-bold text-slate-800 transition-colors group-hover:text-blue-900"
        >
          {item.title}
        </Typography>

        {/* action */}
        <Typography  className="mt-2 flex items-center gap-2 text-sm font-semibold text-orange-500 transition-all group-hover:gap-3">
          بیشتر بخوانید
          <FaArrowLeftLong className="transition-transform duration-300 group-hover:-translate-x-1" />
        </Typography>
      </div>
    </Link>
  );
}
