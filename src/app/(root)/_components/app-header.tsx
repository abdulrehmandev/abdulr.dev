// import { ThemeSwitcher } from "@src/components/theme-switcher";
import { ShareDialog } from "@src/components/share-dialog";
import { SidebarTrigger } from "@src/ui/sidebar";
import Link from "next/link";

export function AppHeader() {
  return (
    <header className="px-6 py-3 w-full fixed z-50 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 w-fit">
          <Link
            href="/"
            className="font-semibold font-serif text-primary text-xl"
          >
            Abdul R.
          </Link>
          <SidebarTrigger className="hidden sm:flex" />
        </div>

        <div className="flex items-center gap-2">
          {/*<ThemeSwitcher />*/}
          <ShareDialog />
          <SidebarTrigger className="flex sm:hidden" />
        </div>
      </div>
    </header>
  );
}
