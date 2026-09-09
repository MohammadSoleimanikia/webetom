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
      <div className="flex w-full flex-col items-center space-y-8 p-3 lg:w-2/3 lg:items-start lg:p-8 xl:w-3/4 xl:px-14">
        {/* text */}
        <div className="text-center lg:text-right">
          <Typography variant="h2">
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
        <div className="grid grid-cols-3 gap-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="shadow-card-small flex items-center gap-1 rounded-2xl bg-white p-2"
              >
                {/* icon */}
                <Icon className={clsx(item.color, "size-14 stroke-1")} />
                {/* text */}
                <div className="flex flex-col">
                  <Typography variant="h5" className="text-lg">
                    {item.title}
                  </Typography>
                  <Typography variant="caption" className="text-base">
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
