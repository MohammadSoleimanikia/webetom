import { Button, Typography } from "@mui/material";
import FaqAccordion from "./faqAccordion ";
import { FAQ_DATA } from "@/data/FAQ";
import clsx from "clsx";
import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { TbShoppingCart } from "react-icons/tb";
import TitleSection from "@/components/titleSection";
import { padding } from "@/const/LAYOUT";
import Link from "next/link";
import { routes } from "@/const/links";
export default function FAQ() {
  return (
    <div
      className={clsx(
        "bg-background flex justify-center rounded-2xl",
        padding.section,
        "lg:p-0",
      )}
    >
      {/* left section */}
      <div className="bg-primary hidden rounded-2xl lg:flex lg:w-2/3">
        {/* text section */}
        <div
          className={clsx(
            "flex w-2/3 flex-col items-center justify-center gap-5 p-10 pl-0",
            "text-center text-white",
          )}
        >
          {/* heading */}
          <div className="space-y-1">
            <Typography variant="h3" className="text-4xl">
              همین حالا سفارش دهید
            </Typography>
            <Typography variant="h3" className="text-4xl">
              فردا سایت شما آماده است!
            </Typography>
          </div>

          <div className="flex w-5/6 flex-col items-center gap-2">
            <Typography variant="h4" className="font-normal">
              مشاوره رایگان و بدون تعهد
            </Typography>
            <div className="flex w-full flex-col">
              <Link className="w-full" href={routes.order}>
                <Button
                  className="w-full"
                  color="secondary"
                  endIcon={<TbShoppingCart className="stroke-2" />}
                >
                  سفارش سایت
                </Button>
              </Link>
              <Button
                LinkComponent={"a"}
                href="tel:05137063145"
                className="hover:bg-primary-light w-full font-normal text-white"
                variant="text"
                endIcon={<FiPhone className="stroke-2" />}
              >
                05137063145
              </Button>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="relative w-1/2">
          <Image
            src="/images/faq.webp"
            fill
            alt="character"
            className="w-full object-contain object-bottom"
          />
        </div>
      </div>

      {/* right section */}
      <div className={clsx("lg:w-1/3 lg:p-5")}>
        {/* header */}
        <TitleSection title={"سولات متداول"} subTitle="سوال ها" />

        {/* mobile content */}
        <FaqAccordion items={FAQ_DATA} />
      </div>
      {/* desktop content */}
    </div>
  );
}
