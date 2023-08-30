import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { links } from "@/data/header";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className={`lg:px-2 absolute z-10 w-full py-3 bg-transparent`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              className="h-full mt-1 dark:block hidden"
              src="/logo-dark.svg"
              width={50}
              height={50}
              alt="logo"
            />
            <Image
              className="h-full mt-1 dark:hidden block"
              src="/logo-light.svg"
              width={50}
              height={50}
              alt="logo"
            />
          </Link>

          <nav className="items-center gap-3 sm:gap-4 flex">
            {links.map((link) => (
              <XlNavLink key={link.id} id={link.id} text={link.name} />
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

const XlNavLink = ({ id, text }) => {
  return (
    <Link
      href={"#" + id}
      className="text-stone-300 font-medium hover:bg-stone-800/20 rounded-full px-5 py-1"
    >
      {text}
    </Link>
  );
};

export default Navbar;
