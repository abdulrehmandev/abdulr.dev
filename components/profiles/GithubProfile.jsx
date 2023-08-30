"use client";

import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { github } from "@/data/profiles";

const GithubProfile = ({ text }) => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <Link
          className="py-2 px-5 rounded-full text-sm flex items-center gap-2 w-fit font-semibold hover:bg-gray-200/25 hover:dark:bg-gray-800/25 transition duration-200"
          href="/"
        >
          <span>{text ? text : "Github"}</span>
          <FiExternalLink />
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="w-[300px] shadow-lg border-primary border-2 rounded-md bg-gray-100 dark:bg-gray-800 p-5 mx-3"
          sideOffset={5}
        >
          <div className="flex flex-col gap-2">
            <img
              className="block h-[60px] w-[60px] rounded-full"
              src={github.avatar}
              alt={github.name}
            />
            <div className="flex flex-col gap-[15px]">
              <div>
                <div className="font-semibold m-0 text-lg">{github.name}</div>
                <div className="opacity-70 m-0 leading-[1.5]">
                  @{github.username}
                </div>
              </div>
              <div className="m-0 text-[15px] leading-[1.5]">{github.bio}</div>
              <div className="flex gap-[15px]">
                <div className="flex gap-[5px]">
                  <div className="m-0 text-[15px] font-medium leading-[1.5]">
                    {github.following}
                  </div>{" "}
                  <div className="opacity-70 m-0 text-sm leading-[1.5]">
                    Following
                  </div>
                </div>
                <div className="flex gap-[5px]">
                  <div className="m-0 text-[15px] font-medium leading-[1.5]">
                    {github.followers}
                  </div>{" "}
                  <div className="opacity-70 m-0 text-sm leading-[1.5]">
                    Followers
                  </div>
                </div>
              </div>
            </div>
          </div>

          <HoverCard.Arrow className="fill-gray-200 dark:fill-gray-800 scale-[200%]" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default GithubProfile;
