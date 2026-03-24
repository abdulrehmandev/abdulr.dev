import { AppFooter } from "./_components/app-footer";
import { AppHeader } from "./_components/app-header";

export default function AppLayout({ children, sheet }: LayoutProps<"/">) {
  return (
    <>
      <div className="container max-w-5xl mx-auto">
        <AppHeader />
        <div className="flex flex-1 flex-col px-3 md:px-6 pb-24">
          {children}
        </div>
        <AppFooter />
      </div>
      {sheet}
    </>
  );
}
