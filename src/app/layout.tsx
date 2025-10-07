import type { Metadata } from "next";

import { META_THEME_COLORS, siteConfig } from "@src/lib/config";
import { fontVariables } from "@src/lib/fonts";
import { cn } from "@src/lib/utils";
import { env } from "@src/env";

import "@src/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL!),
  description: siteConfig.description,
  keywords: [
    "abdulrdev",
    "ai engineer",
    "full stack developer",
    "freelance",
    "automations",
  ],
  authors: [
    {
      name: "Abdul Rehman",
      url: "https://abdulr.dev",
    },
  ],
  creator: "Abdul Rehman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: env.NEXT_PUBLIC_APP_URL!,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`, // @todo
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`], // @todo
    creator: "@iiiabdulrehman",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png", // @todo
    apple: "/apple-touch-icon.png", // @todo
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
                if (localStorage.layout) {
                  document.documentElement.classList.add('layout-' + localStorage.layout)
                }
              } catch (_) {}
            `,
          }}
        />
        <meta name="theme-color" content={META_THEME_COLORS.light} />
      </head>
      <body
        className={cn(
          "text-foreground group/body overscroll-none font-sans antialiased",
          fontVariables
        )}
      >
        {children}
      </body>
    </html>
  );
}
