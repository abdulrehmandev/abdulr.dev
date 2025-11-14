"use client";

import { useState } from "react";
import { IconByName, IconName } from "./icon-mapper";
import React from "react";

const gradients: React.HTMLAttributes<HTMLDivElement>["style"][] = [
  {
    backgroundColor: "#99beff",
    backgroundImage: `radial-gradient(at 24% 88%, hsla(122,65%,75%,1) 0px, transparent 50%),
  radial-gradient(at 73% 78%, hsla(137,73%,69%,1) 0px, transparent 50%),
  radial-gradient(at 26% 75%, hsla(222,73%,67%,1) 0px, transparent 50%),
  radial-gradient(at 96% 54%, hsla(235,77%,71%,1) 0px, transparent 50%),
  radial-gradient(at 52% 94%, hsla(187,81%,61%,1) 0px, transparent 50%),
  radial-gradient(at 73% 94%, hsla(346,63%,66%,1) 0px, transparent 50%),
  radial-gradient(at 89% 41%, hsla(77,82%,66%,1) 0px, transparent 50%)`,
  },
  {
    backgroundColor: "#bdff99",
    backgroundImage: `radial-gradient(at 10% 79%, hsla(273,62%,68%,1) 0px, transparent 50%),
    radial-gradient(at 56% 43%, hsla(173,81%,60%,1) 0px, transparent 50%),
    radial-gradient(at 6% 4%, hsla(351,66%,74%,1) 0px, transparent 50%),
    radial-gradient(at 40% 58%, hsla(117,71%,70%,1) 0px, transparent 50%),
    radial-gradient(at 48% 52%, hsla(289,85%,77%,1) 0px, transparent 50%),
    radial-gradient(at 77% 65%, hsla(304,90%,68%,1) 0px, transparent 50%),
    radial-gradient(at 50% 61%, hsla(172,72%,67%,1) 0px, transparent 50%)`,
  },
  {
    backgroundColor: "#e6ff99",
    backgroundImage: `radial-gradient(at 63% 58%, hsla(160,85%,75%,1) 0px, transparent 50%),
    radial-gradient(at 9% 84%, hsla(333,83%,71%,1) 0px, transparent 50%),
    radial-gradient(at 98% 95%, hsla(0,94%,63%,1) 0px, transparent 50%),
    radial-gradient(at 32% 92%, hsla(19,86%,74%,1) 0px, transparent 50%),
    radial-gradient(at 63% 36%, hsla(260,83%,77%,1) 0px, transparent 50%),
    radial-gradient(at 57% 80%, hsla(208,65%,73%,1) 0px, transparent 50%),
    radial-gradient(at 38% 36%, hsla(62,61%,70%,1) 0px, transparent 50%)`,
  },
  {
    backgroundColor: "#ca99ff",
    backgroundImage: `radial-gradient(at 37% 51%, hsla(191,98%,67%,1) 0px, transparent 50%),
    radial-gradient(at 39% 8%, hsla(276,82%,62%,1) 0px, transparent 50%),
    radial-gradient(at 72% 7%, hsla(210,94%,73%,1) 0px, transparent 50%),
    radial-gradient(at 9% 83%, hsla(335,98%,70%,1) 0px, transparent 50%),
    radial-gradient(at 10% 33%, hsla(351,74%,79%,1) 0px, transparent 50%),
    radial-gradient(at 8% 33%, hsla(206,73%,73%,1) 0px, transparent 50%),
    radial-gradient(at 60% 48%, hsla(315,89%,63%,1) 0px, transparent 50%)`,
  },
  {
    backgroundColor: "#99fff7",
    backgroundImage: `radial-gradient(at 57% 44%, hsla(72,76%,79%,1) 0px, transparent 50%),
    radial-gradient(at 32% 53%, hsla(303,86%,64%,1) 0px, transparent 50%),
    radial-gradient(at 31% 39%, hsla(233,97%,68%,1) 0px, transparent 50%),
    radial-gradient(at 39% 70%, hsla(99,90%,61%,1) 0px, transparent 50%),
    radial-gradient(at 5% 21%, hsla(351,85%,67%,1) 0px, transparent 50%),
    radial-gradient(at 2% 67%, hsla(292,80%,75%,1) 0px, transparent 50%),
    radial-gradient(at 38% 59%, hsla(175,90%,73%,1) 0px, transparent 50%)`,
  },
  {
    backgroundColor: "#ff99f8",
    backgroundImage: `radial-gradient(at 37% 40%, hsla(293,80%,66%,1) 0px, transparent 50%),
    radial-gradient(at 72% 51%, hsla(335,88%,67%,1) 0px, transparent 50%),
    radial-gradient(at 85% 74%, hsla(52,82%,77%,1) 0px, transparent 50%),
    radial-gradient(at 35% 42%, hsla(331,79%,70%,1) 0px, transparent 50%),
    radial-gradient(at 63% 45%, hsla(320,93%,77%,1) 0px, transparent 50%),
    radial-gradient(at 60% 77%, hsla(46,93%,68%,1) 0px, transparent 50%),
    radial-gradient(at 72% 90%, hsla(303,77%,62%,1) 0px, transparent 50%)`,
  },
  {
    backgroundColor: `#999cff`,
    backgroundImage: `radial-gradient(at 49% 68%, hsla(212,94%,60%,1) 0px, transparent 50%),
  radial-gradient(at 77% 57%, hsla(78,91%,79%,1) 0px, transparent 50%),
  radial-gradient(at 67% 12%, hsla(235,79%,79%,1) 0px, transparent 50%),
  radial-gradient(at 81% 22%, hsla(21,91%,73%,1) 0px, transparent 50%),
  radial-gradient(at 76% 13%, hsla(197,73%,73%,1) 0px, transparent 50%),
  radial-gradient(at 40% 88%, hsla(139,64%,60%,1) 0px, transparent 50%),
  radial-gradient(at 48% 86%, hsla(186,73%,72%,1) 0px, transparent 50%)`,
  },
];

let gradientQueue = [...gradients];

function getNextGradient() {
  if (gradientQueue.length === 0) {
    // reshuffle when we've used all
    gradientQueue = [...gradients].sort(() => Math.random() - 0.5);
  }
  return gradientQueue.pop()!;
}

export function IconCover({ icon }: { icon: IconName }) {
  const [gradient, setGradient] = useState(gradients[0]);

  React.useEffect(() => {
    // choose random only on client (avoids hydration mismatch)
    setGradient(getNextGradient());
  }, []);

  return (
    <div
      className="aspect-4/3 size-full border rounded-xs object-cover flex items-center justify-center"
      style={gradient}
    >
      <div className="bg-white text-black p-6 rounded-3xl shadow-2xl">
        <IconByName name={icon} className="size-18" />
      </div>
    </div>
  );
}
