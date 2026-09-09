"use client";

import * as React from "react";
import { FiPlus } from "react-icons/fi";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaqType } from "@/data/FAQ";

type Props = { items: FaqType[] };
export default function FaqAccordion({ items }: Props) {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      {items.map((item, index) => (
        <Accordion
          key={index}
          disableGutters
          elevation={0}
          square
          expanded={expanded === item.question}
          onChange={handleChange(item.question)}
          className="rounded-xl border border-gray-200 before:hidden"
        >
          <AccordionSummary
            expandIcon={<FiPlus />}
            aria-controls="panel1-content"
            id="panel1-header"
            className=""
          >
            <Typography component="span">{item.question}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
