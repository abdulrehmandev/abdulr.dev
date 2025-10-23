import { Metadata } from "next";
import Link from "next/link";
import { RabbitIcon } from "lucide-react";
import { getAllStudies } from "@src/lib/mdx";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@src/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@src/ui/card";

export const dynamic = "force-static";
export const revalidate = false;

const title = "Case Studies";
const description = "Explore my case studies and projects";

export const metadata: Metadata = {
  title,
  description,
};

export default function StudyPage() {
  const caseStudies = getAllStudies();

  return (
    <div className="space-y-8">
      <PageHeader>
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
      </PageHeader>
      <div className="grid gap-4 md:grid-cols-3">
        {caseStudies.map((study) => (
          <Card key={study.slug} asChild>
            <Link
              href={`/study/${study.slug}`}
              className="group transition-all gap-0 block"
            >
              <div className="relative p-2 border-b">
                <svg className="pointer-events-none absolute inset-0 -z-1 size-full select-none text-blue-300 dark:text-blue-400/10">
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
                        stroke-width="1.5"
                      ></line>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#:Su:)"></rect>
                </svg>
                <div className="flex size-full relative items-center justify-center">
                  <img
                    src="https://images.ctfassets.net/kftzwdyauwt9/6bU3sUQ4xHv1r7eyHJxaWO/868bcc4d42d2c06d406ada5b20a44237/Apps_in_ChatGPT.png?w=1920&q=90&fm=webp"
                    className="aspect-4/3 size-full border rounded-xs object-cover"
                    alt=""
                  />
                </div>
              </div>
              <CardHeader className="pt-4">
                <CardTitle>{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-2 justify-between mt-1 pb-4">
                <div className="flex gap-3 items-center text-sm">
                  <p className="font-medium">Product</p>
                  <p className="text-muted-foreground">
                    {new Date(study.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })}
                  </p>
                </div>
                <p className="text-xs text-right text-muted-foreground">
                  {study.readTime}
                </p>
              </CardContent>
              {/* <Image src="/" /> */}
            </Link>
          </Card>
        ))}
        <div className="p-4 w-full h-full flex flex-col gap-1 items-center justify-center text-muted-foreground group/more">
          <RabbitIcon
            className="size-8 group-hover/more:-scale-x-100"
            strokeWidth={1}
          />
          <p className="text-xs">More coming soon!</p>
        </div>
      </div>
    </div>
  );
}

/**
 *  <div className="grid gap-6 md:grid-cols-3">
   {caseStudies.map((study) => (
     <Link
       key={study.slug}
       href={`/study/${study.slug}`}
       className="group transition-all"
     >
       <img
         src="https://images.ctfassets.net/kftzwdyauwt9/6bU3sUQ4xHv1r7eyHJxaWO/868bcc4d42d2c06d406ada5b20a44237/Apps_in_ChatGPT.png?w=1920&q=90&fm=webp"
         className="aspect-square w-full h-fit rounded-lg object-cover"
         alt=""
       />
       <h3 className="font-medium text-lg mt-4">{study.title}</h3>
       <div className="flex items-center gap-2 justify-between mt-2">
         <div className="flex gap-3 items-center text-sm">
           <p className="font-medium">Product</p>
           <p className="text-muted-foreground">
             {new Date(study.date).toLocaleDateString("en-US", {
               year: "numeric",
               month: "short",
             })}
           </p>
         </div>
         <p className="text-xs text-right text-muted-foreground">
           {study.readTime}
         </p>
       </div>
     </Link>
   ))}
   <div className="p-4 w-full h-full flex flex-col gap-1 items-center justify-center text-muted-foreground group/more">
     <RabbitIcon
       className="size-8 group-hover/more:-scale-x-100"
       strokeWidth={1}
     />
     <p className="text-xs">More coming soon!</p>
   </div>
 </div>
 */
