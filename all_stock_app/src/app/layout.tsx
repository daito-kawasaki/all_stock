import type { Metadata } from "next";
import { noto_serif_rl } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={noto_serif_rl.className}>{children}</body>
    </html>
  );
}
