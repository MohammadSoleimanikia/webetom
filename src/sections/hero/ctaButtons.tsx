import { IoChevronForwardSharp } from "react-icons/io5";
import { Button } from "@mui/material";
import { ComponentProps } from "react";
import clsx from "clsx";
import { IoCartOutline } from "react-icons/io5";

type Props = ComponentProps<"div">;

export default function CtaButtons({ className, ...props }: Props) {
  return (
    <div
      {...props}
      className={clsx("w-full items-center justify-around sm:justify-center gap-5", className)}
    >
      <Button
        startIcon={<IoCartOutline />}
        variant="contained"
        color="primary"
        className="min-w-32 px-6 py-2.5 text-sm text-nowrap"
      >
        سفارش سایت
      </Button>

      <Button
        startIcon={<IoChevronForwardSharp />}
        variant="outlined"
        color="primary"
        className="min-w-32 px-6 py-2.5 text-sm text-nowrap"
      >
        مشاهده محصولات
      </Button>
    </div>
  );
}
