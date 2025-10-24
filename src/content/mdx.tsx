import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@src/components/mdx-components";

export function MDXContent({ content }: { content: string }) {
  const components = useMDXComponents({});

  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <MDXRemote source={content} components={components} />
    </div>
  );
}
