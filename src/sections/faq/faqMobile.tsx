import { FaqType } from "@/data/FAQ";
import FaqAccordion from "./faqAccordion ";
type Props = {
  items:FaqType[]
}
export default function FaqMobile({items}:Props) {
  return (
    <div>
        <FaqAccordion items={items}/>
      </div>
  )
}
