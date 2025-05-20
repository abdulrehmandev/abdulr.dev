import Link from "next/link";
import { Icons } from "../icons";
import { Container } from "./container";
import { Button } from "../ui";
import { data } from "@/data";

const socials = {
  x: {
    url: data.socials.x,
    icon: Icons.x,
  },
  github: {
    url: data.socials.github,
    icon: Icons.github,
  },
  linkedin: {
    url: data.socials.linkedin,
    icon: Icons.linkedin,
  },
};

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
            <button
              key={social.url}
              className="p-2 h-9 w-9 flex items-center justify-center rounded-md transition-all [&_svg]:size-5 bg-muted text-muted-foreground border-2 border-transparent hover:[&_svg]:scale-90 hover:border-border hover:bg-background hover:text-foreground"
            >
              <Link href={social.url} target="_blank">
                {social.icon()}
              </Link>
            </button>
          ))}
        </div>
      </Container>
    </footer>
  );
}
