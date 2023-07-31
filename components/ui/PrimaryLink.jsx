import Link from "next/link";

const PrimaryLink = ({ children, href, className }) => {
  return (
    <Link
      href={href}
      className={`py-2 px-5 rounded-full text-sm flex items-center gap-2 w-fit font-semibold hover:bg-stone-300 hover:dark:bg-stone-700 transition duration-200 ${
        className ? className : ""
      }`}
      target="_blank"
    >
      {children}
    </Link>
  );
};

export default PrimaryLink;
