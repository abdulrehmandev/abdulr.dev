import { Metadata } from "next";

const title = "Full Stack Developer";
const description = "Full Stack Developer";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title,
  description,
  // openGraph: {
  //   images: [
  //     {
  //       url: `/og?title=${encodeURIComponent(
  //         title
  //       )}&description=${encodeURIComponent(description)}`,
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   images: [
  //     {
  //       url: `/og?title=${encodeURIComponent(
  //         title
  //       )}&description=${encodeURIComponent(description)}`,
  //     },
  //   ],
  // }, @todo
};

export default function IndexPage() {
  return <div className="font-mono">Hello world!</div>;
}
