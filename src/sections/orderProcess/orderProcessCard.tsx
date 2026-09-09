import { FeatureItem } from "@/data/FEATURES";
import { Typography } from "@mui/material";
import clsx from "clsx";
import { FaArrowDownLong } from "react-icons/fa6";

type Props = {
  item: FeatureItem;
  step: number;
};
export default function OrderProcessCard({ item, step }: Props) {
  const Icon = item.icon;
  return (
    
      <div
        className={clsx(
          "relative  flex w-full  max-w-52 flex-col items-center justify-between gap-2",
          "shadow-card-small rounded-2xl bg-white p-3 text-center",
        )}
      >
        {/*step number*/}
        <div
          className={clsx(
            "bg-primary-light flex size-7 items-center justify-center rounded-full",
            "absolute top-2 right-2",
          )}
        >
          <Typography
            variant="caption"
            className="text-lg font-semibold text-white"
          >
            {step + 1}
          </Typography>
        </div>
        <Icon className="size-18 stroke-1 text-gray-600" />
        <Typography variant="h3">{item.title}</Typography>
        <Typography variant="body1">{item.description}</Typography>
      </div>
      
    
  );
}
