import { IconButton, type IconButtonProps } from "@mui/material";
import clsx from "clsx";
import { FaCircleChevronLeft } from "react-icons/fa6";

type Props = {
  side: "next" | "previous";
} & IconButtonProps;

export default function NavBtn({ side, className, ...others }: Props) {
  return (
    <IconButton
      size="large"
      color="primary"
      className={clsx(
        "absolute top-1/2 z-10 hidden shrink-0 -translate-y-1/2 rounded-full bg-white/5 ",
        " shadow-md transition-all hover:bg-white/50 hover:shadow-lg sm:flex",
        side === "next" ? "template-next  left-0" : "template-prev right-0",
        className,
      )}
      {...others}
    >
      <FaCircleChevronLeft
        className={clsx("text-3xl", side === "previous" && "rotate-180")}
      />
    </IconButton>
  );
}
