import type { MDXComponents } from "mdx/types";
import { Button } from "@src/ui/button";
import { Separator } from "@src/ui/separator";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

function CustomH1({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className="text-4xl font-bold mb-6 mt-8 first:mt-0 max-w-3xl mx-auto"
      {...props}
    >
      {children}
    </h1>
  );
}

function CustomH2({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className="text-3xl font-semibold mb-4 mt-8 first:mt-0  max-w-3xl mx-auto"
      {...props}
    >
      {children}
    </h2>
  );
}

function CustomH3({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className="text-2xl font-semibold mb-3 mt-6 first:mt-0 max-w-3xl mx-auto"
      {...props}
    >
      {children}
    </h3>
  );
}

function CustomP({
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className="mb-4 leading-relaxed max-w-3xl mx-auto" {...props}>
      {children}
    </p>
  );
}

function CustomA({
  children,
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className="text-primary hover:underline underline-offset-4"
      {...props}
    >
      {children}
    </a>
  );
}

function CustomCode({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold max-w-3xl mx-auto"
      {...props}
    >
      {children}
    </code>
  );
}

function CustomPre({
  children,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted p-4 max-w-3xl mx-auto"
      {...props}
    >
      {children}
    </pre>
  );
}

function CustomBlockquote({
  children,
  ...props
}: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className="mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground max-w-3xl mx-auto"
      {...props}
    >
      {children}
    </blockquote>
  );
}

function CustomUl({
  children,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className="my-6 pl-6 list-disc [&>li]:mt-2 max-w-3xl mx-auto"
      {...props}
    >
      {children}
    </ul>
  );
}

function CustomOl({
  children,
  ...props
}: React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className="my-6 pl-6 list-decimal [&>li]:mt-2 max-w-3xl mx-auto"
      {...props}
    >
      {children}
    </ol>
  );
}

function CustomLi({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li className="mt-2" {...props}>
      {children}
    </li>
  );
}

function CustomHr({ ...props }: React.HTMLAttributes<HTMLHRElement>) {
  return <Separator className="my-8 max-w-3xl mx-auto" {...props} />;
}

function CustomImg({
  src,
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img src={src} alt={alt} className="my-6 rounded-lg border" {...props} />
  );
}

// Custom components for case studies
function CaseStudySection({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="my-8 space-y-4 max-w-3xl mx-auto">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function CaseStudyHighlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-primary bg-muted/50 p-4 max-w-3xl mx-auto">
      {children}
    </div>
  );
}

function CaseStudyCodeBlock({
  children,
  language,
}: {
  children: React.ReactNode;
  language?: string;
}) {
  return (
    <div className="my-6">
      {language && (
        <div className="rounded-t-lg border bg-muted px-4 py-2 text-sm font-medium">
          {language}
        </div>
      )}
      <pre className="overflow-x-auto rounded-b-lg border border-t-0 bg-muted p-4">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override the default <a> element
    a: CustomA,
    // Override the default <h1> element
    h1: CustomH1,
    h2: CustomH2,
    h3: CustomH3,
    // Override the default <p> element
    p: CustomP,
    // Override the default <code> element
    code: CustomCode,
    // Override the default <pre> element
    pre: CustomPre,
    // Override the default <blockquote> element
    blockquote: CustomBlockquote,
    // Override the default <ul> element
    ul: CustomUl,
    ol: CustomOl,
    li: CustomLi,
    // Override the default <hr> element
    hr: CustomHr,
    // Override the default <img> element
    img: CustomImg,
    // Custom components
    CaseStudySection,
    CaseStudyHighlight,
    CaseStudyCodeBlock,
    Button,
    Separator,
    ...components,
  };
}
