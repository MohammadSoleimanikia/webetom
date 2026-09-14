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
import { usePathname } from "next/navigation";
import { NAV_ITEM } from "@/data/NAV_ITEMS";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
import clsx from "clsx";
import { TbChevronLeft } from "react-icons/tb";

export default function NavMobile() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
            className: "flex h-dvh w-[300px] flex-col overflow-hidden",
          },
        }}
      >
        {/* top */}
        <div className="shrink-0">
          {/* blob */}
          <div className="absolute -top-5 -left-10 -z-1 flex size-50 rotate-45 justify-end">
            <Image
              src="/images/sideBar/blob.webp"
              alt="blob"
              width={200}
              height={200}
              className="size-50 object-contain object-top-left"
              priority
            />
          </div>

          {/* logo */}
          <div className="h-auto pt-15 pb-5">
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
              {NAV_ITEM.map((item) => {
                const isActive = item.href === pathname;
                const Icon = item.icon;
                return (
                  <ListItemButton
                    key={item.href}
                    component={Link}
                    href={item.href}
                    onClick={closeDrawer}
                    className={clsx(
                      "mx-1 my-1.5 min-h-12 rounded-2xl py-1 transition-all",
                      isActive && "bg-primary-lighter text-primary font-bold",
                    )}
                  >
                    <div className="flex flex-1 items-center gap-3">
                      <div
                        className={clsx(
                          "flex size-8 items-center justify-center rounded-xl",
                          isActive
                            ? "bg-primary-light/80 text-white"
                            : "bg-primary-lighter text-primary-dark/80",
                        )}
                      >
                        <Icon className="size-5" />
                      </div>
                      <Typography
                        className={clsx(
                          "text-base",
                          isActive && "text-primary font-bold",
                        )}
                      >
                        {item.label}
                      </Typography>
                    </div>
                    <TbChevronLeft
                      className={clsx(
                        "size-6",
                        isActive && "text-primary font-bold",
                      )}
                    />
                  </ListItemButton>
                );
              })}
            </List>
          </nav>
        </div>
        {/* footer */}
        <div className="relative  flex-1 w-full mx-0 overflow-hidden">
          
          <Image
            fill
            alt="blob"
            src="/images/sideBar/blobBottom.webp"
            className="object-contain absolute right-0 w-full object-bottom"
          />

          <div className="absolute bottom-5 left-0 z-10 w-full px-5">
            <div className="flex items-center justify-between gap-3">
              {/* Text - right */}
              <div className="flex flex-1 flex-col items-start ">
                <Typography className="text-primary-light text-right text-sm leading-7 font-bold">
                  همیشه یک قدم
                  <br />
                  به کسب‌وکار آنلاین نزدیک‌تر
                </Typography>
              </div>

              {/* Shopping bag - left */}
              <div className="relative size-28 shrink-0">
                <Image
                  src="/images/sideBar/shoppingBag.webp"
                  alt="فروشگاه اینترنتی"
                  fill
                  className="object-contain  object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
