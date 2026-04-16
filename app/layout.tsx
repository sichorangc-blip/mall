import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "아이셋 ISET",
  description: "Set for us, I set"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <SiteHeader />
        <main className="mx-auto w-full max-w-content px-4">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
