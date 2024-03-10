import Image from "next/image";
import React from "react";

const images = [
  { id: 1, src: "/logos/nextjs.svg", alt: "Next.js" },
  { id: 2, src: "/logos/tailwind.webp", alt: "Tailwind CSS" },
  { id: 3, src: "/logos/framer.webp", alt: "Framer Motion" },
  { id: 4, src: "/logos/vercel.webp", alt: "Vercel" },
  { id: 5, src: "/logos/react.webp", alt: "React" },
  { id: 6, src: "/logos/node.webp", alt: "Node.js" },
];
const Stack = () => {
  return (
    <div className="px-4 py-20 flex gap-8 md:gap-16 items-center justify-center flex-wrap">
      <img src={"/logos/nextjs.svg"} className="h-6  w-fit" />
      <img src={"/logos/react.webp"} className="h-14  w-fit" />
      <img src={"/logos/tailwind.webp"} className="h-6  w-fit" />
      <img src={"/logos/node.webp"} className="h-20  w-fit" />
      <img src={"/logos/framer.webp"} className="h-14  w-fit" />
      <img src={"/logos/prisma.svg"} className="h-20  w-fit" />
      <img src={"/logos/vercel.webp"} className="mt-7 md:mt-0 h-6  w-fit" />
    </div>
  );
};

export default Stack;
