import { PLANS } from "@/data/PLANS";
import PlanCard from "./PlanCard";
import TitleSection from "@/components/titleSection";
export default function Plans() {
  return (
    <div className="w-full">
      <TitleSection
        title="پلن های سایت فروشگاهی"
        subTitle="قیمت ها"
      />
      <div className="flex w-full flex-wrap justify-center gap-5 lg:gap-10">
        {PLANS.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
}
