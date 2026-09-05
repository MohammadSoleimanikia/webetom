import { FeatureItem } from "@/const/FEATURES";
import { Typography } from "@mui/material";

type Props = {
  item: FeatureItem;
};
export default function FeaturesItem({ item }: Props) {
  const Icon = item.icon;
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Icon className="text-primary size-6" />
      <Typography variant="body1">{item.title}</Typography>
    </div>
  );
}
