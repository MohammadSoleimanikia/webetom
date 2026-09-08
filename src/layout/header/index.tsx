"use client";
import { Container, Typography, useScrollTrigger } from "@mui/material";
import clsx from "clsx/lite";
import OrderButton from "../../components/orderButton";
import NavMobile from "./navMobile";
import Image from "next/image";
import NavDesktop from "./navDesktop";
export default function Header() {
  const isScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  });
  return (
    // desktop---------------------------------------------------------------------------

    <>
    <header
  className={clsx(
    "sticky top-0 z-20 hidden w-full bg-white transition-all duration-500 lg:block",
    !isScrolled ? "h-20 2xl:h-28" : "h-16 2xl:h-20",
    isScrolled && "shadow-md",
  )}
>
  {/* Logo shape */}
  <div className="absolute top-0 right-0 z-30 h-full w-[33.333%]">
    <div
      className={clsx(
        "absolute top-0 right-0 w-full bg-white transition-all duration-500",
        !isScrolled
          ? "h-[calc(100%+30px)] rounded-bl-[100px] xl:rounded-bl-full"
          : "h-full rounded-bl-[60px] xl:rounded-bl-full",
      )}
    />

    {/* Logo content */}
    <div
      className={clsx(
        "relative z-10 flex w-full flex-col items-center justify-center transition-all duration-500",
        !isScrolled ? "h-[calc(100%+30px)]" : "h-full",
      )}
    >
      <div className="flex flex-col items-center justify-center">
        <Image
          preload
          width={0}
          height={0}
          src="/images/logo.svg"
          alt="Logo"
          className={clsx(
            "w-auto object-contain transition-all duration-500",
            !isScrolled ? "h-10 xl:h-14" : "h-7 xl:h-9",
          )}
        />

        <Typography
          variant="h1"
          className={clsx(
            "transition-all duration-500",
            !isScrolled
              ? "mt-2 text-base xl:text-xl"
              : "mt-1 text-xs xl:text-sm",
          )}
        >
          سایت فروشگاهی آماده
        </Typography>
      </div>
    </div>
  </div>

  {/* left side */}
  <Container
    maxWidth="xxl"
    className="relative z-20 flex h-full items-center justify-between"
  >
    <div className="mr-[33.333%] flex h-full w-full items-center justify-between">
      <NavDesktop />
      <OrderButton className="hidden py-2.5 xl:flex" />
    </div>
  </Container>
</header>

      {/* mobile------------------------------------------------------------- */}
      <header
        className={clsx(
          "sticky top-0 z-50 flex w-full items-center bg-white transition-all duration-500 lg:hidden",
          isScrolled ? "h-14 shadow-md" : "h-20",
        )}
      >
        <Container
          maxWidth="xxl"
          className="flex h-full items-center justify-between"
        >

          {/* burger */}
          <NavMobile />


          {/* Logo */}
          <div className="flex h-full items-center justify-center">
            <Image
              preload
              width={0}
              height={0}
              src="/images/logo.svg"
              alt="Logo"
              className={clsx(
                "w-auto object-contain transition-all duration-500",
                isScrolled
                  ? "h-7"
                  : "h-12",
              )}
            />
          </div>


          {/* order */}
          <OrderButton variant="icon" />

        </Container>
      </header>
    </>
  );
}
