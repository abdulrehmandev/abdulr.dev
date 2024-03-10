import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "./_components/ui/Navbar";
import { FloatingNav } from "./_components/ui/FloatingNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const calsans = localFont({
  src: "../public/fonts/CalSans-SemiBold.otf",
  variable: "--font-calsans",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Abdul Rehman DEV",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${calsans.variable} scrollbar font-sans min-h-screen bg-grid-neutral-200/70`}
      >
        {/* <div vaul-drawer-wrapper=""> */}
        <FloatingNav />
        <Navbar />
        {children}
        <span className="fixed bottom-10 md:bottom-14 left-14 md:left-20 text-zinc-400 text-xs">
          v.2024
        </span>
        {/* </div> */}
      </body>
    </html>
  );
}
