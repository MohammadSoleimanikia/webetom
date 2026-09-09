import { FeatureItem } from "@/data/FEATURES";
import { Typography } from "@mui/material";
import clsx from "clsx/lite";
type Props = {
  item: FeatureItem;
};
export default function FeatureItemMobile({ item }: Props) {
  const Icon = item.icon;
  return (
    <div className="flex flex-col items-center gap-3">
      {/* icon container */}
      <div
        className={clsx(
          "flex items-center justify-center p-4 rounded-xl ",
          "shadow-card-small"
        )}
      >
        <Icon className={`size-6 ${item.color}`} />
      </div>
      <Typography variant="body2" className="text-xs font-semibold">
        {item.title}
      </Typography>
    </div>
  );
}
