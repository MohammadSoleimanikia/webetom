"use client";

import { BlogPostType } from "@/data/BLOG_POSTS";
import { dateFormatter } from "@/utils/dateFormatter";
import { Typography } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: BlogPostType;
};

export default function BlogPostCard({ item }: Props) {
  return (
    <Link
      href={item.link}
      className="group shadow-card-extra-small will-change-transform block overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className=" relative flex h-60 w-full flex-col overflow-hidden rounded-xl bg-white">
        {/* image */}
        <div className="relative h-1/2 w-full overflow-hidden rounded-lg">
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>

        {/* content */}
        <div className="relative flex flex-1 flex-col justify-between p-2">
          {/* label */}
          <div
            className={clsx(
              `bg-${item.color} absolute w-fit rounded-lg px-2 py-0.5 text-white`,
              "top-0 -translate-y-1/2",
            )}
          >
            <Typography
              className="flex items-center justify-center px-1 py-0.5 text-xs font-semibold"
              variant="caption"
            >
              {item.label}
            </Typography>
          </div>

          {/* title */}
          <div className="flex flex-1 flex-col p-1 pt-2">
            <Typography
              variant="h6"
              className="line-clamp-2 text-base font-medium text-gray-800"
            >
              {item.title}
            </Typography>
          </div>

          {/* date */}
          <Typography className="mt-auto text-sm text-gray-500">
            {dateFormatter(item.date)}
          </Typography>
        </div>
      </div>
    </Link>
  );
}
