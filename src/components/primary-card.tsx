"use client";

import { cn } from "@src/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@src/ui/card";
import NextLink from "next/link";
import React from "react";

type PrimaryCardProps = React.ComponentProps<"div"> & {
  actions?: Array<{
    onClick?: () => void;
    label: string;
    icon: React.JSX.Element;
  }>;
  href?: string;
  image: string;
  title: string;
};

export function PrimaryCard({
  className,
  href,
  image,
  title,
  actions,
  children,
  ...props
}: PrimaryCardProps) {
  const actionClickHandler = React.useCallback(
    // to eleminate direct execution of handler
    (action?: () => void) =>
      (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (action === undefined) return;
        e.preventDefault();
        e.stopPropagation();
        action();
      },
    [],
  );

  const Content = (
    <React.Fragment>
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
          <img
            src={image}
            className="aspect-4/3 size-full border rounded-xs object-cover"
            alt={title}
          />
        </div>
        {actions && actions.length !== 0 && (
          <div className="absolute z-1 inset-x-0 bottom-0 bg-card text-primary text-sm flex items-center justify-center border-t border-border-primary translate-y-[110%] group-hover/card:translate-y-0 transition duration-300 *:flex *:cursor-pointer *:[&_svg]:size-3.25 *:items-center *:gap-2 *:py-1.5 *:px-1">
            {actions.map((act) => (
              <button key={act.label} onClick={actionClickHandler(act.onClick)}>
                {act.label} {act.icon}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="relative z-1 bg-card">
        <CardHeader className="pt-4">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="mt-1 pb-4">{children}</CardContent>
      </div>
    </React.Fragment>
  );

  return (
    <Card
      className={cn(
        "group transition-all gap-0 block group/card pb-1",
        { "cursor-pointer": href },
        className,
      )}
      asChild={!!href}
      {...props}
    >
      {href ? <NextLink href={href}>{Content}</NextLink> : Content}
    </Card>
  );
}
