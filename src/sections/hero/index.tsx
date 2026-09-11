import { Typography } from "@mui/material";
import clsx from "clsx/lite";
import Image from "next/image";
import CtaButtons from "./ctaButtons";
import HeroFeatures from "./heroFeatures";
export default function HeroSection() {
  return (
    <section className="relative">
      {/* character image */}
      <div className="flex min-h-64 sm:min-h-64 md:min-h-80">
        <div className="relative w-5/12 sm:w-1/2">
          <Image
            preload
            src="/images/hero/character.webp"
            alt="character in hero section"
            fill
            className="hidden mask-[linear-gradient(to_bottom,black_90%,transparent_100%)] object-contain object-bottom-right sm:block"
          />
          <Image
            preload
            src="/images/hero/character-mobile.webp"
            alt="character in hero section"
            fill

            className="mask-[linear-gradient(to_bottom,black_90%,transparent_100%)] object-contain object-bottom-right sm:hidden"
          />
        </div>

        {/* text section */}
        <div className="flex w-7/12 sm:w-1/2 flex-col items-center justify-center space-y-10 md:space-y-15">
          {/* texts */}
          <div
            className={clsx(
              "bg-primary-lighter/50 md:bg-transparent flex w-full flex-col items-center",
              "justify-center rounded-2xl text-center py-2",
            )}
          >
            <Typography
              variant="h2"
              className={clsx(
                "text-xl sm:text-3xl md:text-4xl lg:text-5xl",
                "xl:text-6xl",
              )}
            >
              سایت فروشگاهی آماده
            </Typography>

            <Typography
              variant="h2"
              className={clsx(
                "text-xl sm:text-3xl md:text-4xl lg:text-5xl",
                "xl:text-6xl",
              )}
            >
              تحویل حضوری در <span className="text-secondary">مشهد</span>
            </Typography>

            <Typography
              variant="body1"
              className={clsx(
                " block text-base font-medium sm:text-lg md:text-2xl lg:text-3xl",
                "mt-4 md:mt-5"
              )}
            >
              --نصب و راه اندازی در کمتر از
              <span className="text-secondary"> 24 </span> ساعت--
            </Typography>
          </div>
          {/* CTA buttons */}
          <CtaButtons className="hidden sm:flex" />
          <HeroFeatures />
        </div>
      </div>

      {/* CTA */}
      <CtaButtons className="absolute bottom-2 mt-1 flex sm:hidden" />
    </section>
  );
}
