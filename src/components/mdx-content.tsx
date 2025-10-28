import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "mdx/types";
import { mdxBaseComponents } from "./mdx-base-components";

export function MDXContent({
  content,
  customComponents,
}: {
  content: string;
  customComponents?: MDXComponents;
}) {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <MDXRemote
        source={content}
        components={{ ...mdxBaseComponents, ...customComponents }}
      />
    </div>
  );
}
