import { Link } from "react-router";
import { Home, LayoutDashboard, ListTodo, CalendarDays } from "lucide-react";

const iconMap = {
  dashboard: LayoutDashboard,
  todo: ListTodo,
};

export default function PageBreadcrumb({
  current,
  currentLabel,
  date = "17 Abril 2026",
}) {
  const CurrentIcon = iconMap[current];

  return (
    <div className="flex items-center gap-3 pl-8 text-sm text-white/60">
      <Link
        to="/"
        className="group flex cursor-pointer items-center gap-1 transition-all duration-200 hover:text-white"
      >
        <Home
          size={14}
          className="opacity-70 transition group-hover:opacity-100"
        />
        <span>Home</span>
      </Link>

      <span className="opacity-40">/</span>

      <div className="flex items-center gap-1">
        {CurrentIcon && <CurrentIcon size={14} className="opacity-70" />}
        <span>{currentLabel}</span>
      </div>

      <span className="opacity-40">/</span>

      <div className="flex items-center gap-1">
        <CalendarDays size={14} className="opacity-70" />
        <span>{date}</span>
      </div>
    </div>
  );
}