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
      className={clsx(
        "h-auto",
        variant === "secondary" && "bg-secondary",

        // Icon variant
        isIcon && ["min-w-0", "size-auto", "p-0", "m-0", "text-primary"],

        // Normal variants
        !isIcon && "w-36",

        className,
      )}
    >
      <IoCartOutline className={clsx(isIcon && "size-7 sm:size-9")} />

      {!isIcon && (
        <Typography variant="button" className="text-xs">
          سفارش سایت
        </Typography>
      )}
    </Button>
  );
}
