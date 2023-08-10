import Link from "next/link";

const PrimaryButton = ({ children, href, className }) => {
  return (
    <Link
      href={href}
      className={`py-2 px-5 rounded-full text-sm font-semibold flex items-center gap-2 w-fit bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 shadow-lg dark:shadow-amber-500/50 shadow-amber-200 hover:shadow-xl hover:shadow-amber-300 transition duration-300 ${
        className ? className : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
