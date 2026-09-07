import { SALES_FEATURES } from "@/const/SALES_FEATURES";
import SalesFeatItem from "./salesFeatItem";
import clsx from "clsx";

export default function SalesFeatures() {
  return (
    <div className={clsx("grid grid-cols-2 gap-5","sm:grid-cols-3 lg:grid-cols-4 lg:gap-10")}>
      {SALES_FEATURES.map((item, index) => (
        <SalesFeatItem item={item} key={index}/>
      ))}
    </div>
  );
}
