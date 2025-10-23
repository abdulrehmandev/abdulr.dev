import { SidebarInset, SidebarProvider } from "@src/ui/sidebar";
import { AppFooter } from "./_components/app-footer";
import { AppHeader } from "./_components/app-header";
import { AppSidebar } from "./_components/app-sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="relative">
      <AppSidebar />
      <AppHeader />
      <SidebarInset className="container mx-auto max-w-5xl">
        <div className="flex flex-1 flex-col px-6 py-24">{children}</div>
        <AppFooter />
      </SidebarInset>
    </SidebarProvider>
  );
}
