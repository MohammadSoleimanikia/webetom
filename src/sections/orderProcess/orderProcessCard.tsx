import { FeatureItem } from "@/data/FEATURES";
import { Typography } from "@mui/material";
import clsx from "clsx";

type Props = {
  item: FeatureItem;
  step: number;
};

export default function OrderProcessCard({ item, step }: Props) {
  const isRight = step % 2 === 0;
  return (
    <div className="relative grid w-full grid-cols-[1fr_50px_1fr] items-center">
      {/* left card */}
      <div className={clsx("col-start-1", isRight ? "invisible" : "visible")}>
        {!isRight && (
          <div
            className={clsx(
              "shadow-card-small ml-auto max-w-70",
              "rounded-2xl bg-white p-4 text-center sm:p-5 lg:p-6",
            )}
          >
            <Typography
              variant="h3"
              className="text-sm font-bold sm:text-base lg:text-lg"
            >
              {item.title}
            </Typography>

            <Typography
              variant="body1"
              className="mt-2  leading-6 text-xs  sm:leading-7  lg:leading-8"
            >
              {item.description}
            </Typography>
          </div>
        )}
      </div>

      {/* step */}
      <div className="relative z-10 col-start-2 flex justify-center">
        <div
          className={clsx(
            "bg-primary flex size-8 items-center justify-center rounded-full",
            "text-white shadow-md ring-4 sm:size-9 lg:size-11",
          )}
        >
          <Typography className="text-sm font-bold sm:text-base">
            {step + 1}
          </Typography>
        </div>
      </div>

      {/* right card */}
      <div className={clsx("col-start-3", !isRight && "invisible")}>
        {isRight && (
          <div
            className={clsx(
              "shadow-card-small mr-auto  max-w-70",
              "rounded-2xl bg-white p-4 text-center sm:p-5 lg:p-6",
            )}
          >
            <Typography
              variant="h3"
              className="text-sm font-bold sm:text-base lg:text-lg"
            >
              {item.title}
            </Typography>

            <Typography
              variant="body1"
              className="mt-2  leading-6 text-xs sm:leading-7 lg:text-sm lg:leading-8"
            >
              {item.description}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}
