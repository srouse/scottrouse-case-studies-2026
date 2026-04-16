import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";

import "./globals.css";

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Private Portfolio",
  description: "Case-study portfolio"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sourceSansPro.className}>{children}</body>
    </html>
  );
}
