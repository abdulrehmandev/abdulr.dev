import { Metadata } from "next";

const title = "Full Stack Developer";
const description = "Full Stack Developer";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title,
  description,
};
