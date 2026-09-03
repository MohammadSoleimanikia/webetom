import CacheProvider from "@/theme/CacheProvider";
import ThemeProvider from "@/theme/ThemeProvider";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function Providers({ children }: Props) {
  return (
    <CacheProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </CacheProvider>
  );
}
