import type { ReactNode } from "react";
import { Typography } from "@mui/material";

type Props = {
  title: string;
  subTitle?: string;
  actionButton?: ReactNode;
};

export default function TitleSection({ title, subTitle, actionButton }: Props) {
  return (
    <div className="mb-7 flex flex-col items-center gap-2 sm:relative sm:flex-row sm:justify-center">
      <div className="flex flex-col items-center gap-2">
        {subTitle && (
          <Typography
            variant="caption"
            className="font-semibold text-xs md:text-sm text-orange-500"
          >
            {subTitle}
          </Typography>
        )}

        <Typography variant="h2" className="text-center">
          {title}
        </Typography>
        <div className="bg-secondary h-1 w-25 rounded-4xl"></div>
      </div>

      {actionButton && (
        <div className="w-full text-left sm:absolute sm:left-0 sm:w-auto">
          {actionButton}
        </div>
      )}
    </div>
  );
}
