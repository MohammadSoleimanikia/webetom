import { ORDER_PROCESS } from "@/data/ORDER_PROCESS";
import { Typography } from "@mui/material";
import OrderProcessCard from "./orderProcessCard";
export default function OrderProcess() {
  return (
    <div className="bg-background rounded-2xl py-5">
      {/* header */}
      <div className="mb-3 flex flex-col items-center gap-2 sm:relative sm:flex-row sm:justify-center md:mb-5">
        <Typography variant="h2" className="text-center">
          فرایند سفارش و تحویل سایت
        </Typography>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 justify-items-center gap-y-3 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-6 lg:grid-cols-4 lg:gap-3">
        {ORDER_PROCESS.map((item, index) => (
          <OrderProcessCard key={index} item={item} step={index} />
        ))}
      </div>
    </div>
  );
}
