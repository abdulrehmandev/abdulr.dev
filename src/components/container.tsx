import { cn } from "@/lib/utils";

type ContainerProps = React.HtmlHTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("container max-w-2xl mx-auto px-4", className)}
      {...props}
    />
  );
}
