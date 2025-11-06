import { IconByName, IconName } from "@src/components/icon-mapper";
import { MDXContent } from "@src/components/mdx-content";
import { cn } from "@src/lib/utils";
import { Badge } from "@src/ui/badge";
import { Card, CardDescription, CardTitle } from "@src/ui/card";

// CUSTOM CASE STUDY COMPONENTS

function StatusBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 bg-green-300/10 w-fit border border-green-200 rounded-full pl-1.5 pr-4 py-1 text-sm font-semibold">
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-5 text-green-500"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
      </svg>{" "}
      <span>{label}</span>
    </div>
  );
}

function FeatureGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2`}>
      {children}
    </div>
  );
}

function Feature({
  description,
  icon,
  title,
  link,
}: {
  icon: IconName;
  title: string;
  description: string;
  link?: string;
}) {
  return (
    <Card className="p-5">
      {icon && <IconByName name={icon} className="w-6 h-6 text-primary mb-3" />}
      <CardTitle className="mt-0">{title}</CardTitle>
      {link && (
        <a
          href={`https://${link}`}
          target="_blank"
          className="font-medium font-mono text-xs bg-muted w-fit mt-2"
        >
          {link}
        </a>
      )}
      <CardDescription className="mt-2">{description}</CardDescription>
    </Card>
  );
}

function MetricsGrid({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 my-6"
      {...props}
    />
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <Card className="px-5 pt-3 pb-4 space-y-1.5">
      <h4 className="text-2xl text-primary font-serif font-semibold">
        {value}
      </h4>
      <p className="uppercase font-mono text-xs">{label}</p>
    </Card>
  );
}

function TechStack({ items }: { items: { names: string[]; role: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4 mb-8">
      {items.map((item) => (
        <Card key={item.role} className="p-4 justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            {item.names.map((name) => (
              <Badge className="break-all" key={name}>
                {name}
              </Badge>
            ))}
          </div>
          <CardTitle className="mt-3 text-balance break-words">
            {item.role}
          </CardTitle>
        </Card>
      ))}
    </div>
  );
}

function ArchitectureFlow({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("space-y-2", className)} {...props} />;
}

function ArchitectureFlowStep({
  children,
  number,
}: {
  number: number;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card border-b border-r flex flex-row items-center gap-3 px-4 py-2">
      <span className="text-primary font-serif font-semibold">{number}.</span>
      <p>{children}</p>
    </div>
  );
}

export function CaseStudyMdxContent({ content }: { content: string }) {
  return (
    <MDXContent
      content={content}
      customComponents={{
        StatusBadge,
        FeatureGrid,
        Feature,
        MetricsGrid,
        Metric,
        TechStack,
        ArchitectureFlow,
        ArchitectureFlowStep,
      }}
    />
  );
}
