"use client";

import Link from "next/link";
import {
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerContent,
  IconButton,
  DrawerTitle,
} from "./ui";
import { data, socials } from "@/data";
import { Mail, Video } from "lucide-react";

type ContactDrawerProps = {
  trigger?: React.ReactNode;
};

export function ContactDrawer({ trigger }: ContactDrawerProps) {
  return (
    <Drawer>
      {trigger && <DrawerTrigger asChild>{trigger}</DrawerTrigger>}
      <DrawerPortal>
        <DrawerContent className="w-120 mx-auto liquid-glass">
          <DrawerTitle className="sr-only">Contact Abdul Rehman</DrawerTitle>

          <div className="flex items-center gap-2 justify-center mt-6 mb-4">
            {Object.values(socials).map((social) => (
              <IconButton key={social.url} asChild>
                <Link href={social.url} target="_blank">
                  {social.icon()}
                </Link>
              </IconButton>
            ))}
          </div>

          <div className="px-6 my-2 mb-8 grid grid-cols-2 gap-4">
            <Link
              href={data.contact.email}
              target="_blank"
              className="rounded-lg shadow-md p-4 space-y-1 liquid-glass"
            >
              <div className="flex items-center gap-2">
                <Mail className="size-4" />
                <p className="font-medium text-sm">Send a Direct Email</p>
              </div>
              <p className="text-sm text-muted-foreground">hello@abdulr.dev</p>
            </Link>

            <Link
              href={data.contact.consultation}
              target="_blank"
              className="border rounded-lg shadow-md p-4 space-y-1 liquid-glass"
            >
              <div className="flex items-center gap-2">
                <Video className="size-4" />
                <p className="font-medium text-sm">Book a call</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Schedule a call at cal.com
              </p>
            </Link>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}
