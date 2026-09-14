import clsx from "clsx";
import React from "react";
import NavBtnDesktop from "./navBtnDesktop";
import { NAV_ITEM } from "@/data/NAV_ITEMS";

export default function NavDesktop() {
  return (
    <nav
      className={clsx(
        "relative z-20 flex",
        "items-center",
        "gap-3 2xl:gap-7",
      )}
    >
      {NAV_ITEM.map((item) => (
        <NavBtnDesktop key={item.href} title={item.label} link={item.href} />
      ))}
    </nav>
  );
}
