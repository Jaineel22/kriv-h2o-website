import { LucideIcon } from "lucide-react";

export type BadgeVariant =
  | "alkaline"
  | "copper"
  | "zinc"
  | "tds"
  | "uv"
  | "smart"
  | "default";

interface FeatureBadgeProps {
  label: string;
  variant?: BadgeVariant;
  icon?: LucideIcon;
  size?: "sm" | "md";
}

const variantStyles: Record<BadgeVariant, string> = {
  alkaline: "bg-emerald-50 text-emerald-700 border-emerald-100",
  copper: "bg-amber-50 text-amber-700 border-amber-100",
  zinc: "bg-violet-50 text-violet-700 border-violet-100",
  tds: "bg-blue-50 text-blue-700 border-blue-100",
  uv: "bg-orange-50 text-orange-700 border-orange-100",
  smart: "bg-sky-50 text-sky-700 border-sky-100",
  default: "bg-slate-50 text-slate-600 border-slate-100",
};

export default function FeatureBadge({
  label,
  variant = "default",
  icon: Icon,
  size = "sm",
}: FeatureBadgeProps) {
  const sizeClass = size === "md"
    ? "px-3.5 py-1.5 text-sm gap-1.5"
    : "px-2.5 py-1 text-xs gap-1";

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${variantStyles[variant]} ${sizeClass}`}
    >
      {Icon && <Icon className={size === "md" ? "w-3.5 h-3.5" : "w-3 h-3"} />}
      {label}
    </span>
  );
}