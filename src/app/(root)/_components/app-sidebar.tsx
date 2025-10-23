"use client";

import { cn } from "@src/lib/utils";
import { Button } from "@src/ui/button";
import { SheetClose } from "@src/ui/sheet";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@src/ui/sidebar";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "About", href: "/" },
  { label: "Case studies", href: "/study", disabled: false },
  { label: "Work", href: "/work", disabled: true },
  { label: "Blogs", href: "/blogs", disabled: true },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar>
      <SidebarHeader className="flex md:hidden px-6 mt-8">
        {/* <SidebarTrigger /> */}
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <X />
        </Button>
      </SidebarHeader>
      {/* <SidebarHeader /> */}
      <SidebarContent className="h-full justify-center px-4">
        <SidebarGroup className="mb-64">
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map((link) => (
                <SidebarMenuItem key={link.label}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === link.href}
                    disabled={link.disabled}
                    title={link.label}
                  >
                    <Link
                      href={link.href}
                      className={cn({
                        "pointer-events-none opacity-50": link.disabled,
                      })}
                    >
                      {link.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* <SidebarFooter /> */}
    </Sidebar>
  );
}
