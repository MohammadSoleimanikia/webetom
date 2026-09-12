"use client";
import { CustomerComment } from "@/data/VOICE_OF_CUSTOMERS";
import { Typography } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
type Props = {
  item: CustomerComment;
};

export default function VocCard({ item }: Props) {
  return (
    <div className="shadow-card-small  bg-white flex justify-between min-h-60 w-full flex-col rounded-xl p-5">
      {/* rating stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <AiFillStar
            key={index}
            className={clsx(
              "size-4",
              index < item.rating ? "text-yellow-400" : "text-gray-300",
            )}
          />
        ))}
      </div>

      {/* comment of the user */}
      <Typography
        variant="body2"
        className="py-3 text-base font-medium text-gray-500"
      >
        {item.comment}
      </Typography>

      {/* customer detail */}
      <div className="flex items-center gap-3 border-t border-t-gray-200 pt-3 ">
        {/* image container */}
        <div className="relative size-14 overflow-hidden rounded-full">
          <Image
            src={item.avatarSrc}
            alt="costumer pic"
            fill
            className="w-full"
          />
        </div>

        {/* customer detail text */}
        <div >
          <Typography variant="body2" className="text-sm font-medium">
            {item.name}
          </Typography>
          <Typography
            variant="body1"
            className="text-xs font-medium text-gray-500"
          >
            {item.profession}
          </Typography>
        </div>
      </div>
    </div>
  );
}
