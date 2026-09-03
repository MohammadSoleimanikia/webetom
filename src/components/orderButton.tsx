import { Button, type ButtonProps } from "@mui/material";
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
        variant === "primary" && "w-36",
        variant === "secondary" && "w-36 bg-secondary",
        variant === "icon" && "size-12 min-w-12 p-0 text-primary",
        className,
      )}
    >
      <IoCartOutline
        className={clsx(
          variant === "icon" && "size-7 sm:size-9",
        )}
      />

      {!isIcon && "سفارش سایت"}
    </Button>
  );
}