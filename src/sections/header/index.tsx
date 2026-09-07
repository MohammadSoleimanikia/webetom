import NavDesktop from "@/sections/header/navDesktop";
import { Container, Typography } from "@mui/material";
import clsx from "clsx/lite";
import OrderButton from "../../components/orderButton";
import NavMobile from "./navMobile";
import Image from "next/image";
export default function Header() {
  return (
    // desktop---------------------------------------------------------------------------

    <>
      <header className="relative z-20 hidden h-20 w-full bg-white lg:block 2xl:h-28">
        {/* Logo shape */}
        <div className="absolute top-0 right-0 z-30 h-full w-[33.333%]">
          <div
            className={clsx(
              "absolute top-0 right-0",
              "h-[calc(100%+30px)] w-full",
              "rounded-bl-[100px] bg-white xl:rounded-bl-full",
            )}
          />

          {/* Logo content */}
          <div className="relative z-10 flex h-[calc(100%+30px)] w-full flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <Image
                preload
                width={0}
                height={0}
                src="/images/logo.svg"
                alt="Logo"
                className="h-10 w-auto object-contain xl:h-14"
              />

              <Typography variant="h1" className="mt-2 text-base xl:text-xl">
                سایت فروشگاهی آماده
              </Typography>
            </div>
          </div>
        </div>

        {/* left side*/}
        <Container
          maxWidth="xxl"
          className="relative  z-20  flex h-full items-center justify-between"
        >
          <div className="mr-[33.333%] flex h-full w-full items-center justify-between ">
            <NavDesktop />
            <OrderButton className="hidden py-2.5 xl:flex" />
          </div>
        </Container>
      </header>

      {/* mobile------------------------------------------------------------- */}
      <header
        className={clsx(
          "relative z-20 flex h-20 w-full items-center lg:hidden",
          "bg-white",
        )}
      >
        <Container maxWidth="xxl" className="flex justify-between">
          {/* burger menu */}
          <NavMobile />

          {/* Logo */}
          <div className="flex flex-col items-center justify-center">
            <Image
              preload
              width={0}
              height={0}
              src="/images/logo.svg"
              alt="Logo"
              className="w-3/6 object-contain sm:w-4/6"
            />

            <Typography variant="h2" className="mt-2 text-xs">
              سایت فروشگاهی آماده
            </Typography>
          </div>

          {/* order Button */}
          <OrderButton variant="icon" />
        </Container>
      </header>
    </>
  );
}
