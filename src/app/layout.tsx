import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Abdul Rehmann - Software Engineer",
  url: "https://mytpen.app/",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulr.dev"),
  title: {
    template: "%s | Abdul Rehmann - Software Engineer",
    default: "Abdul Rehmann - Software Engineer",
  },
  description: "Building digital accessible experiences across web. Pakistan",
  keywords: [
    "abdul rehmann",
    "abdul rehman",
    "abdul rehman dev",
    "abdul rehmann dev",
    "software engineer",
    "web developer",
    "full stack developer",
    "freelance developer",
    "accessible web development",
    "digital experiences",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abdul Rehmann - Software Engineer",
    description: "Building digital accessible experiences across web. Pakistan",
    type: "website",
    url: "https://abdulr.dev",
  },
  twitter: {
    title: "Abdul Rehmann - Software Engineer",
    site: "@iiiabdulrehman",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is used to prevent hydration errors when using next-themes, it would only affect one level deep, other elements would still be hydrated
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${funnelSans.className} antialiased`}>
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
