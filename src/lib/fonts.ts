import {
  Geist_Mono as FontMono,
  Geist as FontSans,
  Lora as FontSerif,
} from "next/font/google";

import { cn } from "@src/lib/utils";

const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontSerif.variable,
);
