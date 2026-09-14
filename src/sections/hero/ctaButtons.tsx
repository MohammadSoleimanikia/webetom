import { IoChevronBack } from "react-icons/io5";
import { Button } from "@mui/material";
import { ComponentProps } from "react";
import clsx from "clsx";
import { TbShoppingCart } from "react-icons/tb";
import Link from "next/link";
import { routes } from "@/const/links";

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
       <Link href={routes.templates} className="w-1/2 min-w-32 sm:w-auto">
      <Button
        endIcon={<IoChevronBack />}
        variant="outlined"
        color="primary"
        className="w-1/2 min-w-32 bg-white px-6 py-2.5 text-sm text-nowrap sm:w-auto"
      >
        مشاهده قالب ها
      </Button>
      </Link>
      <Link href={routes.order} className="w-1/2 min-w-32 sm:w-auto">
        <Button
          endIcon={<TbShoppingCart className="stroke-2" />}
          variant="contained"
          color="secondary"
          className="w-full px-6 py-2.5 text-sm text-nowrap"
        >
          سفارش سایت
        </Button>
      </Link>
    </div>
  );
}
