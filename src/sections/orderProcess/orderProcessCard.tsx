import { FeatureItem } from "@/data/FEATURES";
import { Typography } from "@mui/material";
import clsx from "clsx";

type Props = {
  item: FeatureItem;
  step: number;
};

export default function OrderProcessCard({ item, step }: Props) {
  const isRight = step % 2 === 0;
  const Icon = item.icon;

  return (
    <div className="relative grid w-full grid-cols-[1fr_50px_1fr] items-center">
      {/* left card */}
      <div
        className={clsx(
          "col-start-1",
          isRight && "invisible",
        )}
      >
        {!isRight && (
          <div
            className={clsx(
              "ml-auto max-w-70",
              "rounded-2xl bg-white p-3 text-center shadow-card-small",
              "sm:p-5 lg:p-6",
            )}
          >
            {/* icon */}
            <div className="mb-3 flex justify-center">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary sm:size-11">
                <Icon className="size-5 sm:size-6" />
              </div>
            </div>

            <Typography
              variant="h3"
              className="text-sm font-bold sm:text-base lg:text-lg"
            >
              {item.title}
            </Typography>

            <Typography
              variant="body1"
              className="mt-2 text-xs leading-6 sm:leading-7 lg:text-sm lg:leading-8"
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
            "flex size-8 items-center justify-center",
            "rounded-full bg-primary text-white shadow-md",
            "ring-4 ring-background",
            "sm:size-9 lg:size-11",
          )}
        >
          <Typography className="text-sm font-bold sm:text-base">
            {step + 1}
          </Typography>
        </div>
      </div>

      {/* right card */}
      <div
        className={clsx(
          "col-start-3",
          !isRight && "invisible",
        )}
      >
        {isRight && (
          <div
            className={clsx(
              "mr-auto max-w-70",
              "rounded-2xl bg-white p-3 text-center shadow-card-small",
              "sm:p-5 lg:p-6",
            )}
          >
            {/* icon */}
            <div className="mb-3 flex justify-center">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary sm:size-11">
                <Icon className="size-5 sm:size-6" />
              </div>
            </div>

            <Typography
              variant="h3"
              className="text-sm font-bold sm:text-base lg:text-lg"
            >
              {item.title}
            </Typography>

            <Typography
              variant="body1"
              className="mt-2 text-xs leading-6 sm:leading-7 lg:text-sm lg:leading-8"
            >
              {item.description}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}