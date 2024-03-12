import { Icons } from "@/app/icons";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center font-medium text-sm text-zinc-600">
          <div>
            <Link href="mailto:beingabdulr@gmail.com">
              beingabdulr@gmail.com
            </Link>
          </div>
          <div className="flex items-center justify-center w-fit gap-10">
            <Link
              className="hover:text-zinc-800 transition-colors"
              href="#work"
            >
              Work
            </Link>
            <Link
              className="hover:text-zinc-800 transition-colors"
              href="#contact"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-3 sm:gap-6">
            <Link href="https://www.github.com/abdulrehmandev" target="_blank">
              <Icons.github className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/abdulrdev" target="_blank">
              <Icons.linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://join.skype.com/invite/r2KpCXhsWync"
              target="_blank"
            >
              <Icons.skype className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
