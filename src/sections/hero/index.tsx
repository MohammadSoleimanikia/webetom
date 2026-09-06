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
        <div className="relative w-1/2">
          <Image
            preload
            src="/images/character.webp"
            alt="character"
            fill
            className="mask-[linear-gradient(to_bottom,black_90%,transparent_100%)] hidden object-contain object-bottom-right sm:block"
          />
          <Image
            preload
            src="/images/character-mobile.webp"
            alt="character"
            fill

            className="mask-[linear-gradient(to_bottom,black_90%,transparent_100%)] object-contain object-bottom-right sm:hidden"
          />
        </div>

        {/* text section */}
        <div className="flex w-1/2 flex-col items-center justify-center space-y-10 md:space-y-15">
          {/* texts */}
          <div className=" text-center flex w-full flex-col items-center justify-center">
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
                "text-base block mt-2 md:mt-5 font-semibold sm:text-lg md:text-2xl lg:text-3xl",
              )}
            >
              --نصب و راه اندازی در{" "}
              کمتر از<span className="text-secondary"> 24 </span>  ساعت--
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
