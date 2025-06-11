import { Slot } from "@radix-ui/react-slot";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function IconButton({ children, asChild }: IconButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className="p-2 h-9 w-9 flex items-center justify-center rounded-md transition-all [&_svg]:size-5 bg-muted text-muted-foreground border-2 border-transparent hover:[&_svg]:scale-90 hover:border-border hover:bg-background hover:text-foreground">
      {children}
    </Comp>
  );
}
