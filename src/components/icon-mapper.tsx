import {
  Building2,
  ChartGantt,
  ChartNoAxesColumn,
  ClipboardClock,
  Goal,
  Layers,
  Lightbulb,
  LucideProps,
  Network,
  RefreshCcw,
  Search,
  Warehouse,
  Zap,
} from "lucide-react";

const icons = {
  goal: Goal,
  bulb: Lightbulb,
  zap: Zap,
  recycle: RefreshCcw,
  "chart-no-axis-column": ChartNoAxesColumn,
  "chart-gantt": ChartGantt,
  search: Search,
  warehouse: Warehouse,
  layers: Layers,
  "clipboard-clock": ClipboardClock,
  building: Building2,
  network: Network,
};
export type IconName = keyof typeof icons;

export function IconByName({
  name,
  ...props
}: LucideProps & { name: IconName }) {
  const Icon = icons[name];
  return <Icon {...props} />;
}
