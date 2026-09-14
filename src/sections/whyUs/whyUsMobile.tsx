import TitleSection from "@/components/titleSection";
import { padding } from "@/const/LAYOUT";
import { FeatureItem } from "@/data/FEATURES";
import { Typography } from "@mui/material";
import clsx from "clsx";
type Props = {
  items: FeatureItem[];
};

export default function WhyUsMobile({ items }: Props) {
  return (
    <div className={clsx("md:hidden", padding.section)}>
      <TitleSection title={"چرا سایتوم رو انتخاب کنید؟"} subTitle="مزیت‌ها" />

      {/* items section */}
      <div className="flex w-full flex-wrap justify-center gap-5">
        {/* item */}
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={clsx(
                "shadow-card-extra-small flex w-[calc(50%-10px)] flex-col items-center space-y-1",
                "rounded-xl bg-white p-2 text-center",
                "transition-all duration-300 hover:-translate-y-2 sm:w-[calc(33.333%-14px)]",
              )}
            >
              <Icon className={clsx("text-primary size-10")} />
              <Typography
                variant="h6"
                className="text-primary-dark font-semibold"
              >
                {item.title}
              </Typography>
              <Typography
                variant="caption"
                className="text-sm font-semibold text-gray-500"
              >
                {item.description}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
}
