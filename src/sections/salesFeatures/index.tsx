import { SALES_FEATURES } from "@/data/SALES_FEATURES";
import SalesFeatItem from "./salesFeatItem";
import TitleSection from "@/components/titleSection";

export default function SalesFeatures() {
  return (
    <div>
      <TitleSection
        title={"امکاناتی که فروش شما رو بیشتر میکند."}
        subTitle="امکانات"
      />
      <div className="w-full flex flex-wrap justify-center lg:justify-between gap-5">
        {SALES_FEATURES.map((item, index) => (
          <SalesFeatItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
