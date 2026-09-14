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
        // width
        "w-[calc(50%-10px)] sm:w-[calc(33.333%-13.333px)] lg:w-[calc(25%-30px)]",

        // layout
        "group relative flex min-h-52 flex-col items-center rounded-2xl bg-white p-4",

        // appearance
        "shadow-card-small border border-slate-100",
        "hover:shadow-card-medium transition-all duration-300 hover:-translate-y-1",
      )}
    >
      {/* icon */}
      <div
        className={clsx(
          "relative z-10 flex h-20 w-20 shrink-0 items-center justify-center",
          "rounded-2xl bg-blue-50 group-hover:bg-primary-lighter p-3",
          "transition-all duration-300 group-hover:scale-105",
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
      <div className="relative z-10 mt-4 flex min-w-0 flex-1 flex-col items-start text-center">
        <Typography
          variant="body1"
          className="w-full leading-6 font-bold text-slate-900 sm:text-lg"
        >
          {item.title}
        </Typography>

        {item.description && (
          <Typography
            variant="caption"
            className="mt-1.5 line-clamp-2 w-full leading-5 font-medium text-slate-500 sm:text-base"
          >
            {item.description}
          </Typography>
        )}
      </div>
    </div>
  );
}
