"use client";

import { ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

import { theme } from "./index";

export default function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
}