import { Icons } from "@/app/icons";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-16 sm:h-16 md:h-24 px-4 sm:px-10 md:px-20 flex justify-between items-center">
      <div className="flex items-center gap-3 sm:gap-6">
        <Icons.github className="w-6 h-6" />
        <Icons.tailwind className="w-6 h-6" />
      </div>
      <nav className="flex items-center justify-center gap-10 md:gap-16 font-medium text-sm text-zinc-600">
        <Link className="hover:text-zinc-800 transition-colors" href="#about">
          Work
        </Link>
        <Link
          className="hover:text-zinc-800 transition-colors"
          href="#projects"
        >
          About
        </Link>
        <Link className="hover:text-zinc-800 transition-colors" href="#contact">
          Contact
        </Link>
      </nav>
      <span className="hidden md:block w-14"></span>
    </div>
  );
};

export default Navbar;
