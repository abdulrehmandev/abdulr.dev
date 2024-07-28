import React from "react";
import Link from "next/link";

import Container from "./container";
import { ConsultationLink, PortfolioRepoLink, SocialLinks } from "@/data";
import { cn } from "@/lib";
import { buttonVariants, Icon } from "../ui";

const Footer = () => {
  return (
    <footer className="bg-white">
      <Container className="pt-14 md:pt-20 pb-10 md:pb-16 flex flex-col gap-6 items-center">
        <nav className="flex items-center justify-center gap-8 w-fit">
          <Link
            href={ConsultationLink}
            target="_blank"
            className={cn(
              buttonVariants({
                variant: "link",
              })
            )}
          >
            Book a Call
          </Link>
        </nav>

        <ul className="flex w-fit items-center justify-center gap-4">
          {SocialLinks.map((link) => (
            <li key={link.href}>
              <Link
                target="_blank"
                href={link.href}
                title={link.label}
                className={cn(
                  buttonVariants({
                    variant: "icon",
                    size: "icon-sm",
                  })
                )}
              >
                <Icon name={link.icon} size={18} />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={PortfolioRepoLink}
          target="_blank"
          className={cn(
            buttonVariants({
              variant: "link",
            }),
            "block w-fit mx-auto text-neutral-500 text-xs"
          )}
        >
          Designed & Built by Abdul Rehman
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
