import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { Lenis } from "./lenis";

/**
 * Custom provider component to wrap the application with necessary providers.
 */
export function Providers({ children }: PropsWithChildren) {
  return (
    <Lenis>
      <ThemeProvider
        defaultTheme="dark"
        attribute="class"
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </Lenis>
  );
}
