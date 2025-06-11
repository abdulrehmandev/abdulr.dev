import Link from "next/link";
import { Container } from "./container";
import { Button, IconButton } from "../ui";
import { data, socials } from "@/data";

export function Footer() {
  return (
    <footer className="border-t">
      <Container className="flex items-center justify-between">
        <span className="text-muted-foreground">AbdulR. © 2025</span>
        <div className="flex items-center gap-2">
          <Button asChild variant="link" size="sm">
            <Link href={`mailto:${data.contact.email}`}>Say hello!</Link>
          </Button>
          {Object.values(socials).map((social) => (
            <IconButton key={social.url} asChild>
              <Link href={social.url} target="_blank">
                {social.icon()}
              </Link>
            </IconButton>
          ))}
        </div>
      </Container>
    </footer>
  );
}
