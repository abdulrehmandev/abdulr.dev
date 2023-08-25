"use client";

import { useTheme } from "next-themes";
import { FiMoon } from "react-icons/fi";
import { RiSunLine } from "react-icons/ri";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="dark:hover:bg-stone-800 hover:bg-stone-200 dark:text-stone-400 text-stone-600 rounded-full p-2"
    >
      {theme == "dark" ? <RiSunLine /> : <FiMoon />}
    </button>
  );
};

export default ThemeToggle;
