import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/layout";
import { Providers } from "@/components/providers";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Rehman",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is used to prevent hydration errors when using next-themes, it would only affect one level deep, other elements would still be hydrated
    <html lang="en" suppressHydrationWarning>
      <body className={`${funnelSans.className} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
