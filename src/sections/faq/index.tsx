import { Typography } from "@mui/material";
import FaqAccordion from "./faqAccordion ";
import { FAQ_DATA } from "@/data/FAQ";


export default function FAQ() {
  return (
    <div className=" rounded-2xl py-5">
      {/* header */}
      <div className="mb-3 flex flex-col items-center gap-2 sm:relative sm:flex-row sm:justify-center md:mb-5">
        <Typography variant="h2" className="text-center">
          سوالات متداول
        </Typography>
      </div>

      {/* mobile content */}
      <FaqAccordion items={FAQ_DATA}/>
    </div>
  );
}
