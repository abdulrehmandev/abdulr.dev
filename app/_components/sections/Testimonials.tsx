"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CARDS = [
  {
    id: 0,
    name: "Usama bin Amjad",
    designation: "Client at Upwork",
    content: (
      <p>
        &quot;Abdul is a expert in his work. He completed the job in just a few
        hours. Highly recommended&quot;
      </p>
    ),
  },
  {
    id: 1,
    name: "Paul Zamor",
    designation: "Co-founder of Developers World LLC",
    content: (
      <p>
        &quot;Abdul was such a pleasure to work with. Talented, communicative
        and fast. Highly recommend!&quot;
      </p>
    ),
  },
  {
    id: 2,
    name: "David Mancusi",
    designation: "Architect at Ability Beyond",
    content: (
      <p>
        &quot;Abdul have done an incredible job, and the whole team is amazed by
        his skills.&quot;
      </p>
    ),
  },
];

const Testimonials = () => {
  return (
    <div className="px-4 pt-20 pb-32 text-center bg-white">
      <h2 className="font-primary mb-20 leading-6 mx-auto text-2xl md:text-4xl lg:text-5xl text-neutral-700 max-w-5xl">
        I have worked with many <br />{" "}
        <span className="text-orange-500">amazing people</span>
      </h2>

      <CardStack items={CARDS} />
    </div>
  );
};

export default Testimonials;

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 3000);

    return () => clearInterval(interval);
  };

  return (
    <div className="relative mx-auto h-60 w-72 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-neutral-50 h-48 w-72 md:w-96 rounded-xl p-4 shadow-xl border border-neutral-200 shadow-black/[0.1] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
              // borderColor: index === 0 ? "#FFA500" : "rgb(229, 229, 229)",
              background:
                index === 0 ? "rgb(255, 255, 255)" : "rgb(232, 232, 232)",
              opacity: index === 0 ? 1 : 0.8,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="font-normal text-neutral-700 hyphens-auto">
              {card.content}
            </div>
            <div>
              <p className="text-neutral-500 font-medium">{card.name}</p>
              <p className="text-neutral-400 font-normal">{card.designation}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
