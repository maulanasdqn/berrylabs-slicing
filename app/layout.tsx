import type { Metadata, Viewport } from "next";
import { FC, PropsWithChildren } from "react";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Berry Labs",
  description:
    "Automate Without Breaking the Bank: Affordable Solutions for Every Business.",
  keywords: ["Berry Labs", "Bank", "Solutions", "Affordable"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const RootLayout: FC<Readonly<PropsWithChildren>> = ({ children }) => {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
