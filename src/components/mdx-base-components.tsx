import { Card } from "@src/ui/card";
import { Separator } from "@src/ui/separator";
import { MDXComponents } from "mdx/types";

function h2({ ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className="text-3xl font-semibold font-serif text-primary-title mb-4 mt-8 first:mt-0 border-b pb-2"
      {...props}
    />
  );
}

function h3({ ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className="text-[22px] font-semibold font-serif text-primary-title mb-3 mt-6 first:mt-0 "
      {...props}
    />
  );
}

function h4({ ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      className="font-semibold text-sharp-foreground first:mt-0 mb-1"
      {...props}
    />
  );
}

function p({ ...props }: React.ComponentProps<"p">) {
  return <p className="mb-4 leading-relaxed" {...props} />;
}

function strong({ ...props }: React.ComponentProps<"strong">) {
  return <strong className="font-medium text-sharp-foreground" {...props} />;
}

function a({ ...props }: React.ComponentProps<"a">) {
  return (
    <a className="text-link hover:underline underline-offset-4" {...props} />
  );
}

function code({ ...props }: React.ComponentProps<"code">) {
  return (
    <code
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
      {...props}
    />
  );
}

function pre({ ...props }: React.ComponentProps<"pre">) {
  return (
    <pre
      className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted p-4"
      {...props}
    />
  );
}

function blockquote({ ...props }: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      className="mt-6 border-l-3 border-primary py-3 pl-5 bg-muted text-muted-foreground *:mb-0"
      {...props}
    />
  );
}

function ul({ ...props }: React.ComponentProps<"ul">) {
  return <ul className="mt-2 mb-6 pl-6 list-disc [&_li]:mt-1" {...props} />;
}

function ol({ ...props }: React.ComponentProps<"ol">) {
  return <ol className="my-6 pl-6 list-decimal [&_li]:mt-1" {...props} />;
}

function hr({ ...props }: React.ComponentProps<"hr">) {
  return <Separator className="my-8" {...props} />;
}

function img({ ...props }: React.ComponentProps<"img">) {
  return (
    <Card asChild>
      <img className="h-full max-h-120 my-6 p-1 w-fit mx-auto" {...props} />
    </Card>
  );
}

export const mdxBaseComponents: MDXComponents = {
  h2,
  h3,
  h4,
  p,
  a,
  strong,
  code,
  pre,
  blockquote,
  ul,
  ol,
  hr,
  img,
};
