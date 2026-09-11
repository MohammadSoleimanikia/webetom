import Image from "next/image";
import { Typography } from "@mui/material";
import { SalesFeatType } from "@/data/SALES_FEATURES";
import clsx from "clsx/lite";
import { FiArrowLeft } from "react-icons/fi";

type Props = {
  item: SalesFeatType;
};

export default function SalesFeatItem({ item }: Props) {
  return (
    <div
      className={clsx(
        "group relative flex min-h-52 flex-col items-center rounded-2xl bg-white p-4",
        "shadow-card-small border border-slate-100",
        "hover:shadow-card-medium transition-all duration-300 hover:-translate-y-1",
      )}
    >
      {/* icon */}
      <div
        className={clsx(
          "relative z-10 flex h-20 w-20 shrink-0 items-center justify-center",
          "rounded-2xl bg-blue-50 p-3 transition-transform duration-300 group-hover:scale-105",
        )}
      >
        <div className="relative h-full w-full">
          <Image
            src={item.iconSrc}
            alt={item.title}
            fill
            sizes="80px"
            className="object-contain"
          />
        </div>
      </div>

      {/* content */}
      <div className="relative z-10 mt-4 text-center flex  min-w-0 flex-1 flex-col items-start">
        <Typography
          variant="body1"
          className="w-full sm:text-lg  leading-6 font-bold text-slate-900"
        >
          {item.title}
        </Typography>

        {item.description && (
          <Typography
            variant="caption"
            className="mt-1.5 sm:text-base line-clamp-2  w-full leading-5 font-medium text-slate-500"
          >
            {item.description}
          </Typography>
        )}
      </div>
    </div>
  );
}
