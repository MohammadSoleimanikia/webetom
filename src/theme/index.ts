import { createTheme } from "@mui/material";
import { components } from "./overrides";
import { palette } from "./palette";
import typography from "@/theme/typography";
import BreakPoints from "./breakpoints";
export const theme = createTheme({
  direction: "rtl",
  cssVariables: true,

  components: components,
  palette: palette,
  typography: typography,
  breakpoints: {
    values: BreakPoints,
  },
});
