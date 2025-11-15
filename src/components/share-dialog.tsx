"use client";

import { useIsMobile } from "@src/hooks/use-mobile";
import { Button } from "@src/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@src/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@src/ui/tooltip";
import { CopyIcon, FacebookIcon, Link2 } from "lucide-react";
import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { Icons } from "./icons";

export function ShareDialog() {
  const isMobile = useIsMobile();

  const [currentUrl, setCurrentUrl] = React.useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href || "");
    }
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {})
      .catch(() => {
        console.log("Failed to copy");
      });
  };

  const socialIcons = [
    {
      component: EmailShareButton,
      icon: <Icons.mail className="size-5" />,
      label: "Email",
    },
    {
      component: FacebookShareButton,
      icon: <FacebookIcon className="size-5" />,
      label: "Facebook",
    },
    {
      component: TwitterShareButton,
      icon: <Icons.x className="size-4" />,
      label: "X / Twitter",
    },
    {
      component: LinkedinShareButton,
      icon: <Icons.linkedin className="size-6" />,
      label: "LinkedIn",
    },
    // { component: WhatsappShareButton, icon: <WhatsAppIcon />, label: "Whatsapp" },
    // { component: RedditShareButton, icon: <RedditIcon />, label: "Reddit" }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size={isMobile ? "icon-sm" : undefined}>
          <Link2 />
          {!isMobile && "Share"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share</DialogTitle>
          <DialogDescription className="sr-only">
            Share this page on socials
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="bg-muted text-muted-foreground w-full py-1 px-2 font-mono text-sm">
              {currentUrl}
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={handleCopyLink}
                  className="px-2 py-1 cursor-pointer"
                >
                  <CopyIcon className="size-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy URL</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex items-center justify-between gap-5 flex-wrap">
            {socialIcons.map((social) => (
              <Button
                variant="ghost"
                key={social.label}
                title={social.label}
                asChild
              >
                <social.component url={currentUrl}>
                  {social.icon} <span>{social.label}</span>
                </social.component>
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
