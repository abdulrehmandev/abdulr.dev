import Link from "next/link";
import { Button, IconButton } from "../ui";
import { Container } from "./container";
import { data } from "@/data";
import { Mail } from "lucide-react";
import { ContactDrawer } from "../contact-drawer";

export function Header() {
  return (
    <header>
      <Container className="flex items-center justify-between">
        <div className="space-y-0.5">
          <div className="flex items-end gap-3">
            {/* Logo */}
            <Link
              href="/"
              className="uppercase tracking-tighter text-xl font-light leading-4.5"
            >
              <span className="font-bold">Abdul R</span>
              <span className="text-muted-foreground">ehman</span>
            </Link>

            <p className="text-xs font-light uppercase tracking-wide leading-3">
              Freelance Software Engineer
            </p>
          </div>
          <p className="text-xs font-light uppercase leading-3">
            Building Accessible Digital Experiences across web
          </p>
        </div>

        <div className="flex items-center gap-3">
          <IconButton asChild>
            <Link href={data.contact.email} target="_blank">
              <Mail />
            </Link>
          </IconButton>
          <ContactDrawer
            trigger={<Button variant="secondary">Let&apos;s Connect</Button>}
          />
        </div>
      </Container>
    </header>
  );
}
