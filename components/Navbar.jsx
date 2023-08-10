import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FiMenu } from "react-icons/fi";
import { links } from "@/data/header";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`lg:px-2 py-3 fixed left-0 right-0 z-10 trasnition duration-200 dark:border-stone-800 border-stone-200 ${
        isScrolled ? "bg-morph border-b" : "bg-transparent"
      }`}
    >
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

          {/* <nav className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="dark:hover:bg-stone-800 hover:bg-stone-200 rounded-md p-2">
                  <FiMenu />
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content className="mt-1 mr-2 py-2 min-w-[150px] rounded-md bg-morph dark:text-stone-200 border-stone-200 dark:border-stone-800 text-stone-800 z-50">
                  {links.map((link) => (
                    <DropdownMenu.Item
                      key={link.id}
                      className="font-medium py-1 px-5 hover:bg-stone-300 dark:hover:bg-stone-800"
                    >
                      <Link href={"#" + link.id}>{link.name}</Link>
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </nav> */}
        </div>
      </div>
    </header>
  );
};

const XlNavLink = ({ id, text }) => {
  return (
    <Link
      href={"#" + id}
      className="dark:text-stone-400 text-stone-600 font-medium dark:hover:bg-stone-800 hover:bg-stone-200 dark:hover:text-stone-200 hover:text-stone-800 rounded-full px-5 py-1"
    >
      {text}
    </Link>
  );
};

export default Navbar;
