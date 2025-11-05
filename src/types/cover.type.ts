import { IconName } from "@src/components/icon-mapper";
import { LucideProps } from "lucide-react";

type CoverImage = {
  type: "image";
  src: string;
  alt?: string;
  component?: never;
  icon?: never;
};
type CoverComponent = {
  type: "component";
  component: React.JSX.Element;
  src?: never;
  icon?: never;
  alt?: never;
};
type CoverIcon = {
  type: "icon";
  icon: IconName;
  src?: never;
  component?: never;
  alt?: never;
};
export type Cover = CoverImage | CoverComponent | CoverIcon;
