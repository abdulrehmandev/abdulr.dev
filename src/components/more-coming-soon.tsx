import { cn } from "@src/lib/utils";
import { RabbitIcon } from "lucide-react";

export function MoreComingSoon({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "p-4 min-h-48 w-full h-full flex flex-col gap-1 items-center justify-center text-muted-foreground group/more",
        className,
      )}
      {...props}
    >
      <RabbitIcon
        className="size-8 group-hover/more:-scale-x-100"
        strokeWidth={1}
      />
      <p className="text-xs">More coming soon!</p>
    </div>
  );
}
