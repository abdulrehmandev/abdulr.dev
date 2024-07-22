import type { Metadata } from "next";
import { Cardo, DM_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components";
import { PrimaryColors } from "@/data";
import React from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans-dm",
});

const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif-cardo",
});

export const metadata: Metadata = {
  title: "Abdul Rehman",
  description:
    "Abdul Rehman is a Software Engineer who builds highly accessible, performant and modern web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const color = React.useMemo(() => {
    const randomIndex = Math.floor(Math.random() * PrimaryColors.length);
    return PrimaryColors[randomIndex];
  }, []);

  return (
    <html lang="en">
      <head>
        {/* <style>{`:root { --color-primary: ${color}; }`}</style> */}
      </head>
      <body className={`${dmSans.className} ${cardo.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
