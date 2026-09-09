"use client";

import {
  Button,
  Drawer,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { NAV_ITEM } from "@/data/NAV_ITEMS";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
export default function NavMobile() {
  const [open, setOpen] = useState(false);

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Burger Button */}
      <Button
        variant="text"
        type="button"
        onClick={() => setOpen(true)}
        className="m-0 min-w-0 p-0"
      >
        <HiOutlineMenuAlt3 className="size-7 text-gray-700 sm:size-9" />
      </Button>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={closeDrawer}
        slotProps={{
          paper: {
            className: "w-[300px] h-screen bg-primary-lighter",
          },
        }}
      >
        {/* logo */}
        <div className="h-auto bg-white py-5">
          <div className="flex h-full flex-col items-center justify-center">
            <Image
              width={0}
              height={0}
              src="/images/logo.svg"
              alt="Logo"
              className="h-10 w-auto object-contain xl:h-14"
            />

            <Typography variant="h2" className="mt-2 text-base xl:text-xl">
              سایت فروشگاهی آماده
            </Typography>
          </div>
        </div>

        <nav>
          <List disablePadding>
            {NAV_ITEM.map((item) => (
              <ListItemButton
                key={item.href}
                component={Link}
                href={item.href}
                onClick={closeDrawer}
                className="min-h-12"
              >
                {item.label}
              </ListItemButton>
            ))}
          </List>
        </nav>
      </Drawer>
    </>
  );
}
