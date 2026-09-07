import { FeatureItem } from "@/const/FEATURES";
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
        "sm:shadow-card-small flex flex-col items-center justify-center gap-2 rounded-xl p-2",
        "sm:flex-row sm:justify-start sm:gap-5",
      )}
    >
      {/* icon */}
      <div
        className={clsx(
          "shadow-card-small flex size-14 items-center justify-center rounded-lg",
          "sm:shadow-card-extra-small",
        )}
      >
        <Icon className={clsx(item.color, "size-8")} />
      </div>

      {/* content */}
      <div className={clsx("flex flex-col items-center", "sm:items-start")}>
        {/* title */}
        <Typography variant="body2" className="font-semibold text-center sm:text-right">
          {item.title}
        </Typography>
        {item.description && (
          <Typography variant="caption" className="font-medium text-center sm:text-right">
            {item.description}
          </Typography>
        )}
      </div>
    </div>
  );
}
