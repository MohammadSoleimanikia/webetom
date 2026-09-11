import { FeatureItem } from "@/data/FEATURES";
import { Typography } from "@mui/material";
import clsx from "clsx";
type Props = {
  items: FeatureItem[];
};

export default function WhyUsMobile({ items }: Props) {
  return (
    <div className="md:hidden">
      <Typography variant="h2" className="mb-3 text-center">
        
        چرا ما را انتخاب کنید؟
      </Typography>

      {/* items section */}
      <div
        className={clsx(
          "grid w-full grid-cols-2 sm:grid-cols-3 align-middle",
          "gap-5 sm:grid-cols-3",
        )}
      >
        {/* item */}
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={clsx(
                "flex w-full flex-col items-center rounded-xl bg-white",
                "shadow-card-extra-small space-y-1 p-2 text-center",
                index === items.length - 1 &&
                  "col-span-2 justify-self-center sm:col-span-1",
              )}
            >
              <Icon className={clsx("size-10  text-primary ")} />
              <Typography variant="h6" className="font-semibold text-primary-dark">
                {item.title}
              </Typography>
              <Typography
                variant="caption"
                className="text-sm  font-semibold text-gray-500"
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
