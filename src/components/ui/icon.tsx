import {
  ArrowUpRight,
  Calendar,
  Github,
  Instagram,
  Link,
  Linkedin,
  LucideProps,
  Mail,
  Twitter,
} from "lucide-react";
import React from "react";

const IconMap = {
  "arrow-up-right": ArrowUpRight,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  calendar: Calendar,
  link: Link,
};

type IconName = keyof typeof IconMap;

export interface IconProps extends LucideProps {
  name: IconName;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = IconMap[name];
  return <IconComponent {...props} />;
};

export default Icon;
