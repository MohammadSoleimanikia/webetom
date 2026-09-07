import type { Shadows } from "@mui/material/styles";

export const shadows = [
  "none",
  "0px 0px 20px 1px #00000024",
  "0px 0px 10px 1px #00000024",
  "0px 0px 3px 1px #00000024",
  ...Array(21).fill("none"),
] as Shadows;