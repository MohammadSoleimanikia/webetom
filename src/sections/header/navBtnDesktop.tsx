"use client";
import { Button, Typography } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Props = {
  title: string;
  link: string;
};
export default function NavBtnDesktop({ title, link }: Props) {
  const pathname = usePathname();
  const isActive = link === pathname;

  return (
    <Button
      LinkComponent={Link}
      href={link}
      variant="text"
      className={clsx(
        "text-black",
        isActive && "text-primary border-b-primary rounded-b-none border-b-4",
      )}
    >
      <Typography variant="button" className="text-nowrap font-extrabold">
        {title}
      </Typography>
    </Button>
  );
}
