import { Plan } from "@/data/PLANS";
import { Button, Typography } from "@mui/material";
import { TbCheck } from "react-icons/tb";
import clsx from "clsx";
type Props = {
  plan: Plan;
};
export default function PlanCard({ plan }: Props) {
  return (
    <div
      className={clsx(
        "shadow-card-extra-small relative flex flex-col items-center rounded-lg",
        "w-full max-w-80 gap-2 p-6 pb-3",
        plan.isSpecial && "border-primary border-2",
      )}
    >
      {/* special header */}
      {plan.isSpecial && (
        <Typography
          variant="caption"
          className={clsx(
            "bg-primary absolute -top-1 left-1/2 z-1 -translate-x-1/2 text-nowrap text-white",
            "w-52 rounded-t-sm rounded-b-2xl py-1 text-center",
          )}
        >
          پیشنهاد ویژه
        </Typography>
      )}

      {/* title */}
      <Typography
        variant="h3"
        className={clsx("text-xl font-bold")}
        style={{
          color: plan.color,
        }}
      >
        {plan.title}
      </Typography>

      {/* description */}
      <Typography
        variant="caption"
        className={clsx("text-sm font-semibold text-gray-500")}
      >
        {plan.description}
      </Typography>

      {/* price */}
      <Typography variant="h3" className={clsx("text-xl font-bold")}>
        {plan.price.toLocaleString()}
        <span className="mr-1 text-sm font-semibold text-gray-500">تومان</span>
      </Typography>

      {/* pros items */}
      <div className="flex w-full flex-col gap-3">
        {plan.items.map((item, index) => (
          <div key={index} className="flex w-full items-start gap-1">
            {/* check icon  */}
            <div className="flex size-5 items-center justify-center rounded-md bg-gray-100">
              <TbCheck
                className={clsx("size-4")}
                style={{
                  color: plan.color,
                }}
              />
            </div>

            <Typography variant="body1" className="text-sm">
              {item}
            </Typography>
          </div>
        ))}
      </div>

      {/* button */}
      <Button className={clsx("mt-auto w-full")} style={{
        backgroundColor:plan.color
      }}>
        {`سفارش پلن ${plan.title}`}
      </Button>
    </div>
  );
}
