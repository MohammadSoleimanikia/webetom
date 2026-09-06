import { Button, Typography, type ButtonProps } from "@mui/material";
import { IoCartOutline } from "react-icons/io5";
import clsx from "clsx";

type Props = {
  variant?: "primary" | "secondary" | "icon";
} & Omit<ButtonProps, "variant">;

export default function OrderButton({
  className = "",
  variant = "primary",
  ...props
}: Props) {
  const isIcon = variant === "icon";

  return (
    <Button
      {...props}
      variant={isIcon ? "text" : "contained"}
      endIcon={
        !isIcon && (
          <IoCartOutline className={clsx(isIcon && "size-7 sm:size-9")} />
        )
      }
      className={clsx(
        "h-auto",
        variant === "secondary" && "bg-secondary",

        // Icon variant
        isIcon && "text-primary m-0 size-auto min-w-0 p-0",

        // Normal variants
        !isIcon && "w-36 text-sm text-nowrap",

        className,
      )}
    >
      {isIcon && (
        <IoCartOutline className={clsx(isIcon && "size-7 sm:size-9")} />
      )}

      {!isIcon && " سفارش سایت"}
    </Button>
  );
}
