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
        <div className="mx-auto flex h-full w-full items-center">
          {/* Logo Section */}
          <div className="relative z-30 h-full w-4/12">
            {/*  Shape */}
            <div
              className={clsx(
                "absolute top-0 left-0 z-0",
                "h-[calc(100%+30px)] w-full",
                "rounded-bl-[100px] bg-white xl:rounded-bl-full",
              )}
            />

            {/* Logo Content */}
            <div
              className={clsx(
                "absolute top-0 left-0 z-10",
                "flex h-[calc(100%+30px)] w-full",
                "flex-col items-center justify-center",
                "pl-10",
              )}
            >
              {/* Logo */}
              <div className="flex flex-col items-center justify-center">
                <Image
                  preload
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
          </div>

          {/* Navigation */}
          <div className="flex h-full w-9/12 items-center justify-between pl-10">
            <NavDesktop />
            <OrderButton className="hidden xl:flex" />
          </div>
        </div>
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
