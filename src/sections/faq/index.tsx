import { Button, Typography } from "@mui/material";
import FaqAccordion from "./faqAccordion ";
import { FAQ_DATA } from "@/data/FAQ";
import clsx from "clsx";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
export default function FAQ() {
  return (
    <div className="bg-background flex rounded-2xl">
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

          <div className="flex flex-col items-center gap-2 w-5/6">
            <Typography variant="h4" className="font-normal">
              مشاوره رایگان و بدون تعهد
            </Typography>
            <div className="flex flex-col w-full">
              <Button className=" w-full" color="secondary" endIcon={<IoCartOutline />}>
                سفارش سایت
              </Button>
              <Button
                LinkComponent={'a'}
                href="tel:05137063145"
                className="font-normal text-white w-full hover:bg-primary-light"
                variant="text"
                endIcon={<FiPhone className="stroke-1" />}
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
      <div className="md:p-5 lg:w-1/3">
        {/* header */}
        <div
          className={clsx(
            "mb-3 flex flex-col items-center gap-2",
            "justify-center sm:relative sm:flex-row md:mb-5 lg:justify-start",
          )}
        >
          <Typography variant="h2" className="text-center">
            سوالات متداول
          </Typography>
        </div>

        {/* mobile content */}
        <FaqAccordion items={FAQ_DATA} />
      </div>
      {/* desktop content */}
    </div>
  );
}
