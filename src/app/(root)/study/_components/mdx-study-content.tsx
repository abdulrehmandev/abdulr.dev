import { MDXContent } from "@src/components/mdx-content";
import { Badge } from "@src/ui/badge";
import { Card, CardDescription, CardTitle } from "@src/ui/card";
import {
  ChartNoAxesColumn,
  Goal,
  Lightbulb,
  RefreshCcw,
  Search,
  Zap,
} from "lucide-react";

// Icons set map for use in .mdx
const icons = {
  goal: Goal,
  bulb: Lightbulb,
  zap: Zap,
  recycle: RefreshCcw,
  chart: ChartNoAxesColumn,
  search: Search,
};
type IconName = keyof typeof icons;

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
}: {
  icon: IconName;
  title: string;
  description: string;
}) {
  const Icon = icons[icon];
  return (
    <Card className="px-5 py-4">
      {Icon ? <Icon className="w-6 h-6 text-primary" /> : <span>❓</span>}
      <CardTitle className="mt-3">{title}</CardTitle>
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {items.map((item) => (
        <Card key={item.role} className="p-4 justify-between">
          {/*{Icon ? <Icon className="w-6 h-6 text-primary" /> : <span>❓</span>}*/}
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
      }}
    />
  );
}
