import { FeatureItem } from "@/data/FEATURES";
import { Typography } from "@mui/material";
import clsx from "clsx";
import React from "react";
type Prop = {
  item: FeatureItem;
};
export default function FeatureCardDesktop({ item }: Prop) {
  const Icon = item.icon;
  return (
    <div className="flex flex-col items-center justify-center space-y-1 text-center">
      {/* icon container */}
      <div
        className={clsx(
          "flex size-14 flex-col items-center rounded-full bg-white md:size-20",
          "items-center justify-center",
        )}
      >
        <Icon className="text-primary size-8 md:size-12" />
      </div>

      <Typography variant="h5" className="text-white lg:text-xl">
        {item.title}
      </Typography>
      <Typography variant="caption" className="text-white lg:text-sm">
        {item.description}
      </Typography>
    </div>
  );
}
