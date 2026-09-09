import { PLANS } from "@/data/PLANS"
import PlanCard from "./PlanCard"
export default function Plans() {
  return (
    <div className="flex flex-wrap justify-center lg:gap-10 gap-5">
      {PLANS.map((plan,index)=><PlanCard key={index} plan={plan}/>)}
    </div>
  )
}