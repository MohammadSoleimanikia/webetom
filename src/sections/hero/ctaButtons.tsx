import { IoChevronBack, IoChevronForwardSharp } from "react-icons/io5";
import { Button } from "@mui/material";
import { ComponentProps } from "react";
import clsx from "clsx";
import { IoCartOutline } from "react-icons/io5";

type Props = ComponentProps<"div">;

export default function CtaButtons({ className, ...props }: Props) {
  return (
    <div
      {...props}
      className={clsx(
        "w-full items-center justify-between gap-5 sm:justify-center",
        className,
      )}
    >
      <Button
        endIcon={<IoChevronBack />}
        variant="outlined"
        color="primary"
        className="min-w-32 bg-white w-1/2 sm:w-auto px-6 py-2.5 text-sm text-nowrap"
      >
        مشاهده قالب ها
      </Button>
      <Button
        endIcon={<IoCartOutline />}
        variant="contained"
        color="secondary"
        className="min-w-32 w-1/2 sm:w-auto px-6 py-2.5 text-sm text-nowrap"
      >
        سفارش سایت
      </Button>
    </div>
  );
}
