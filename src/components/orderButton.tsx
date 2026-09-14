import { routes } from "@/const/links";
import { Button, type ButtonProps } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { TbShoppingCart } from "react-icons/tb";

type Props = {
  variant?: "primary" | "secondary" | "icon";
  text?:string
} & Omit<ButtonProps, "variant">;

export default function OrderButton({
  className = "",
  variant = "primary",
  text="سفارش سایت",
  ...props
}: Props) {
  const isIcon = variant === "icon";
  return (
    
    <Button
      LinkComponent={Link}
      href={routes.order}
      {...props}
      variant={isIcon ? "text" : "contained"}
      endIcon={
        !isIcon && (
          <TbShoppingCart  className={clsx(isIcon && "size-7 sm:size-9 ")} />
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
        <TbShoppingCart className={clsx(isIcon && "size-7 stroke-2 text-gray-600 sm:size-9")} />
      )}

      {!isIcon && text}
    </Button>
  );
}
