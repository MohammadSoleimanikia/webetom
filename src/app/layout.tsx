import type { Metadata } from "next";
import "./globals.css";

import { Yekan_Bakh } from "@/assets/fonts";
import Providers from "@/poviders";
import Header from "@/sections/header";
import Footer from "@/sections/footer";

export const metadata: Metadata = {
  title: "سایتوم",
  description: "سایت فروشگاهی آماده تحویل در مشهد ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${Yekan_Bakh.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <Providers>
          <Header />
          <main className="bg-primary flex-1 lg:pt-[30px]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
