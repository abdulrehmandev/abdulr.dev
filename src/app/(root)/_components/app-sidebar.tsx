"use client";

import { cn } from "@src/lib/utils";
import { Button } from "@src/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@src/ui/sidebar";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { label: "About", href: "/" },
  { label: "Case studies", href: "/study", disabled: false },
  { label: "Work", href: "/work", disabled: false },
  { label: "Blogs", href: "/blogs", disabled: true },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  const isLinkActive = React.useCallback((href: string) => {
    if (href === "/") return pathname === href;
    return (
      pathname.startsWith(href) &&
      (pathname.length === href.length || pathname.charAt(href.length) === "/")
    );
  }, []);

  return (
    <Sidebar>
      <SidebarHeader className="flex md:hidden px-6 mt-8">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <X />
        </Button>
      </SidebarHeader>
      <SidebarContent className="h-full justify-center px-4">
        <SidebarGroup className="mb-64">
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map((link) => (
                <SidebarMenuItem key={link.label}>
                  <SidebarMenuButton
                    asChild
                    isActive={isLinkActive(link.href)}
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
    </Sidebar>
  );
}
