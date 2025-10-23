import { Metadata } from "next/types";
import { Button } from "@src/ui/button";
import Link from "next/link";

const title = "404 - Page Not Found";
const description = "The page you are looking for does not exist.";

export const metadata: Metadata = {
  title,
  description,
};

export default function NotFoundPage() {
  return (
    <div className="font-mono min-h-svh flex items-center justify-center flex-col gap-2">
      <h1>404 - Page Not Found</h1>
      <p>This page does not exist.</p>

      <Button className="mt-6" asChild variant="outline">
        <Link href="/">Take me home</Link>
      </Button>
    </div>
  );
}
