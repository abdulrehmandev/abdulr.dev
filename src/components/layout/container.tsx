import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  verticalPaddingg?: boolean;
}

export function Container({
  children,
  className,
  verticalPaddingg = true,
}: ContainerProps) {
  return (
    <div
      className={cn(
        `container mx-auto px-8`,
        verticalPaddingg && "py-8",
        className
      )}
    >
      {children}
    </div>
  );
}
