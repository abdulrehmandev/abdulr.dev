import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentQuarter() {
  const month = new Date().getMonth();

  if (month >= 0 && month <= 2) return 1;
  if (month >= 3 && month <= 5) return 2;
  if (month >= 6 && month <= 8) return 3;
  return 4;
}
