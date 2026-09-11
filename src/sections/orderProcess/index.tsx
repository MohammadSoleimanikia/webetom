import { ORDER_PROCESS } from "@/data/ORDER_PROCESS";
import { Typography } from "@mui/material";
import OrderProcessCard from "./orderProcessCard";

export default function OrderProcess() {
  return (
    <div className="bg-background rounded-2xl px-4 py-6 sm:px-6 sm:py-8">
      {/* header */}
      <div className="mb-6 flex flex-col items-center gap-2 sm:mb-8">
        <Typography variant="h2" className="text-center">
          فرایند سفارش و تحویل سایت
        </Typography>
      </div>

      
      <div className="relative mx-auto w-full max-w-3xl">
        

        {/* line */}
        <div className="bg-primary absolute top-10 bottom-10 left-1/2  w-0.5 -translate-x-1/2" />

        <div className="relative flex flex-col gap-8 sm:gap-10 lg:gap-12">
          {ORDER_PROCESS.map((item, index) => (
            <OrderProcessCard key={index} item={item} step={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
