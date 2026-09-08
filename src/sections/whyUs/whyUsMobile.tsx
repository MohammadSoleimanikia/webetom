import { FeatureItem } from "@/const/FEATURES";
import { Typography } from "@mui/material";
import clsx from "clsx";
type Props = {
  items: FeatureItem[];
};

export default function WhyUsMobile({ items }: Props) {
  return (
    <div className="md:hidden">
      <Typography variant="h2" className="mb-3 text-center">
        چرا باید ما را انتخاب کنید؟
      </Typography>

      {/* items section */}
      <div
        className={clsx(
          "grid w-full grid-cols-2 align-middle",
          "gap-3 sm:grid-cols-3",
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
                "space-y-2 p-2 text-center shadow-card-extra-small",
                index === items.length - 1 &&
                  "col-span-2 justify-self-center sm:col-span-1",
              )}
            >
              <Icon className="text-primary size-10" />
              <Typography variant="h5" className="font-semibold">
                {item.title}
              </Typography>
              <Typography
                variant="caption"
                className="text-sm font-medium text-gray-700"
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
