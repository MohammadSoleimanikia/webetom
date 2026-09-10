import { FeatureItem } from "@/data/FEATURES";
import { Typography } from "@mui/material";
import clsx from "clsx/lite";

type Props = {
  item: FeatureItem;
};
export default function SalesFeatItem({ item }: Props) {
  const Icon = item.icon;
  return (
    <div
      className={clsx(
        "shadow-card-small flex flex-col items-center justify-center rounded-xl p-2",
        "flex-row justify-start sm:gap-5 sm:p-4",
      )}
    >
      {/* icon */}
      <div
        className={clsx(
          "flex size-14 items-center justify-center rounded-lg",
          "sm:shadow-card-extra-small",
        )}
      >
        <Icon className={clsx("size-8")} style={{ color: item.color }} />
      </div>

      {/* content */}
      <div className={clsx("flex flex-col items-start space-y-1")}>
        {/* title */}
        <Typography
          variant="body2"
          className="text-right font-semibold md:text-base"
        >
          {item.title}
        </Typography>
        {item.description && (
          <Typography
            variant="caption"
            className="text-right font-medium md:text-sm"
          >
            {item.description}
          </Typography>
        )}
      </div>
    </div>
  );
}
