import OrderButton from "@/components/orderButton";
import { Typography } from "@mui/material";
import clsx from "clsx/lite";
import Image from "next/image";
import CtaButtons from "./ctaButtons";
import HeroFeatures from "./heroFeatures";
export default function HeroSection() {
  return (
    <section >
      {/* character image */}
      <div className="flex min-h-32 sm:min-h-64 md:min-h-80">
        <div className="relative w-1/2">
          <Image
            preload
            src="/images/character.webp"
            alt="character"
            fill
            className="object-contain object-bottom-right"
          />
        </div>

        {/* text section */}
        <div className="flex w-1/2 space-y-5 flex-col items-center justify-center">
        {/* texts */}
          <div className="flex w-full flex-col items-center justify-center">
            <Typography
              variant="h2"
              className={clsx(
                "text-lg sm:text-3xl md:text-4xl lg:text-5xl",
                "xl:text-6xl",
              )}
            >
              سایت فروشگاهی آماده
            </Typography>

            <Typography
              variant="h2"
              className={clsx(
                "text-lg sm:text-3xl md:text-4xl lg:text-5xl",
                "xl:text-6xl",
              )}
            >
              تحویل حضوری در <span className="text-secondary">مشهد</span>
            </Typography>

            <Typography
              variant="body1"
              className={clsx(
                "text-sm font-medium sm:text-lg md:text-2xl lg:text-3xl",
              )}
            >
              --نصب و راه اندازی در{" "}
              <span className="text-primary">کمتر از</span> 24 ساعت--
            </Typography>
          </div>
          {/* CTA buttons */}
          <CtaButtons className="hidden sm:flex"/>
          <HeroFeatures/>
        </div>
      </div>

      {/* CTA */}
      <CtaButtons className="flex sm:hidden"/>
    </section>
  );
}
