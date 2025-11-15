"use client";

import { cn } from "@src/lib/utils";
import { Card } from "@src/ui/card";
import NextLink from "next/link";
import React from "react";
import { IconCover } from "./icon-cover";
import { Cover } from "@src/types/cover.type";

type PrimaryCardProps = React.ComponentProps<"div"> & {
  actions?: Array<{
    label: string;
    icon: React.JSX.Element;
  }>;
  asLink?: {
    href: string;
    target?: React.HTMLAttributeAnchorTarget;
  };
  cover: Cover;
};

export function PrimaryCard({
  cover,
  className,
  children,
  asLink,
  actions,
  title,
  ...props
}: PrimaryCardProps) {
  const content = (
    <React.Fragment>
      <PrimaryCardCover cover={cover} actions={actions} />
      <div className="relative z-1 bg-card py-4">{children}</div>
    </React.Fragment>
  );

  return (
    <Card
      className={cn(
        "group transition-all gap-0 block group/card pb-1 relative",
        { "cursor-pointer": asLink ? true : false },
        className,
      )}
      asChild={!!asLink}
      {...props}
    >
      {asLink ? (
        <NextLink href={asLink.href} target={asLink.target}>
          {content}
        </NextLink>
      ) : (
        content
      )}
    </Card>
  );
}

function PrimaryCardCover({
  cover,
  actions,
}: {
  cover: Cover;
  actions: PrimaryCardProps["actions"];
}) {
  let innerComponent: React.JSX.Element | undefined = undefined;
  switch (cover.type) {
    case "image":
      innerComponent = (
        <img
          src={cover.src}
          className="aspect-4/3 size-full border rounded-xs object-cover"
          alt={cover.alt}
          loading="eager"
        />
      );
      break;
    case "component":
      innerComponent = cover.component;
      break;
    case "icon":
      innerComponent = <IconCover icon={cover.icon} />;
      break;
  }

  return (
    <div className="relative p-1.5 border-b">
      <svg className="pointer-events-none absolute inset-0 size-full select-none text-blue-300 dark:text-blue-400/10">
        <defs>
          <pattern
            id=":Su:"
            width="4"
            height="4"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="4"
              stroke="currentColor"
              strokeWidth="1.5"
            ></line>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#:Su:)"></rect>
      </svg>
      <div className="flex size-full relative items-center justify-center">
        {innerComponent}
      </div>
      {actions && actions.length !== 0 && (
        <div className="absolute z-1 inset-x-0 bottom-0 bg-card text-primary text-sm flex items-center justify-center border-t border-border-primary translate-y-[110%] group-hover/card:translate-y-0 transition duration-300 *:flex *:cursor-pointer *:[&_svg]:size-3.25 *:items-center *:gap-2 *:py-1.5 *:px-1">
          {actions.map((act) => (
            <button key={act.label}>
              {act.label} {act.icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
