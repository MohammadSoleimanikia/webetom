import { TOP_MARGIN } from "@/const/LAYOUT";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import clsx from "clsx";
import SocialSection from "./socialSection/socialSection";
import MenuSection from "./menuSection";
import { FOOTER_MENUS } from "@/data/FOOTER_MENU";

export default function Footer() {
  return (
    <footer className={clsx("bg-primary-darker py-10 text-white")}>
      <Container maxWidth="xxl">
        {/* main section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* social section */}
          <SocialSection />
          {/* menu section */}
          {FOOTER_MENUS.map((menu, index) => (
            <MenuSection key={index} menu={menu} />
          ))}
        </div>

        {/* lower section (copy write text) */}
        <div className="mt-8 flex justify-center pt-5 border-t border-primary-light">
          {/* copy write text */}
          <div>
            <Typography className="h-6 font-medium text-white">
              تمامی حقوق این وب‌سایت متعلق به{" "}
              <span className="text-secondary font-semibold">سایتوم</span>{" "}
              می‌باشد.
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
}
