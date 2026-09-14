import { IconButton, type IconButtonProps } from "@mui/material";
import clsx from "clsx";
import { FaChevronLeft } from "react-icons/fa6";

type Props = {
  side: "next" | "previous";
  nextEl: string;
  previousEl: string;
} & IconButtonProps;

export default function NavBtn({
  nextEl,
  previousEl,
  side,
  className,
  ...others
}: Props) {
  return (
    <IconButton
      size="small"
      color="primary"
      className={clsx(
        "bg-primary absolute top-7/12 z-10 hidden size-8 shrink-0 -translate-y-1/2 rounded-full opacity-70 transition-all duration-300",
        "hover:bg-primary-dark shadow-md transition-all hover:shadow-lg sm:flex",
        side === "next" ? `${nextEl} left-4` : `${previousEl} right-4`,
        className,
      )}
      {...others}
    >
      <FaChevronLeft
        className={clsx(
          "size-6 text-white",
          side === "previous" && "rotate-180",
        )}
      />
    </IconButton>
  );
}
