import { padding } from "@/const/LAYOUT";
import { FeatureItem } from "@/data/FEATURES";
import { Typography } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";

type Props = {
  items: FeatureItem[];
};

export default function WhyUsDesktop({ items }: Props) {
  return (
    <div className="hidden min-h-64 md:flex">
      {/* content */}
      <div
        className={clsx(
          "flex w-full flex-col items-center space-y-3 lg:w-2/3 lg:items-start xl:w-3/4",
          padding.section
        )}
      >
        {/* text */}
        <div className="text-center lg:text-right">
          <Typography variant="h2" className="mb-3">
            {" "}
            چرا باید <span className="text-secondary">سایتوم</span> را انتخاب
            کنید؟
          </Typography>
          <Typography variant="body1" className="text-lg">
            ما فقط سایت نمی‌سازیم، کسب‌وکار شما را آنلاین و حرفه ای میکنیم.
          </Typography>
          <Typography variant="body1" className="text-lg">
            تمرکز ما بر سرعت، کیفیت و رضایت شماست.
          </Typography>
        </div>

        {/* items */}
        <div className="flex w-full flex-wrap justify-center gap-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="shadow-card-small flex w-full items-center gap-3 rounded-2xl bg-white p-3 md:w-[calc(50%-8px)] lg:w-[calc(33.333%-12px)]"
              >
                {/* icon */}
                <Icon
                  className={clsx("size-13 stroke-1")}
                  style={{
                    color: item.color,
                  }}
                />
                {/* text */}
                <div className="flex flex-col">
                  <Typography variant="h5" className="text-lg">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    className="text-sm text-gray-600 2xl:text-base"
                  >
                    {item.description}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* image */}
      <div className="relative hidden lg:block lg:w-1/3 xl:w-1/4">
        <Image
          fill
          className="hidden h-full object-contain object-bottom lg:block"
          src="/images/whyUs.webp"
          alt="character"
        />
      </div>
    </div>
  );
}
