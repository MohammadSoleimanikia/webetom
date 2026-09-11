import { Typography } from "@mui/material";
import Image from "next/image";

import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { LiaTelegram } from "react-icons/lia";
import SocialIconWrapper from "./socialIconWrapper";

export default function SocialSection() {
  return (
    <div className="flex w-full flex-col items-center space-y-3 text-center">
      {/* logo + title */}
      <div className="flex w-full flex-col items-center gap-1">
        <div className="relative h-10 w-1/2">
          <Image
            fill
            alt="logo of sitom"
            className="object-contain"
            src="/images/logo-light.svg"
          />
        </div>

        <Typography variant="h2" className="text-sm">
          سایت فروشگاهی آماده
        </Typography>
      </div>

      {/* site description */}
      <Typography variant="body1" className="max-w-md py-3">
        سیتوم، ارائه‌دهنده سایت‌های فروشگاهی آماده با تحویل و پشتیبانی همیشگی،
        در خدمت شما و کسب‌وکارهایتان در مشهد.
      </Typography>

      {/* icons */}
      <div className="flex w-full justify-between">
        <SocialIconWrapper link="https://www.instagram.com/webeto.co">
          <IoLogoWhatsapp className="size-6" />
        </SocialIconWrapper>
        <SocialIconWrapper link="https://www.instagram.com/webeto.co">
          <IoLogoInstagram className="size-6" />
        </SocialIconWrapper>
        <SocialIconWrapper link="https://www.instagram.com/webeto.co">
          <IoLogoWhatsapp className="size-6" />
        </SocialIconWrapper>
        <SocialIconWrapper link="https://www.instagram.com/webeto.co">
          <LiaTelegram className="size-6" />
        </SocialIconWrapper>
      </div>
    </div>
  );
}
