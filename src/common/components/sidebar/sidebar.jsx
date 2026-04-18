import { NavLink } from "react-router";
import {
  LayoutDashboard,
  ListTodo,
  Flag,
  Clock3,
  CheckCheck,
  CalendarDays,
  FolderOpen,
  Rocket,
} from "lucide-react";
import UserSection from "../user-section";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/todo", label: "TODO", icon: ListTodo },
  { to: "/priority-task", label: "Priority Tasks", icon: Flag },
  { to: "/task-in-process", label: "Tasks in Progress", icon: Clock3 },
  { to: "/completed-task", label: "Completed Tasks", icon: CheckCheck },
  { to: "/calendar", label: "Calendar", icon: CalendarDays },
  { to: "/files", label: "Files", icon: FolderOpen },
];

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-[300px] lg:shrink-0">
      <div className="flex h-full flex-col rounded-[28px] border border-white/10 bg-slate-950/55 p-5 shadow-2xl backdrop-blur-2xl">
        <div className="h-26 flex items-center px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              <Rocket size={20} className="text-cyan-300" />
            </span>

            <h1 className="text-5xl font-medium tracking-[-0.03em] text-white">
              iDash
            </h1>
          </div>
        </div>

        <nav className="mt-8 flex flex-col gap-4 lg:mt-10">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-2xl border px-5 py-4 text-sm transition ${
                    isActive
                      ? "border-white/20 bg-white/15 text-white shadow-lg"
                      : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Icon size={16} />
                </span>

                <span>{link.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <UserSection />
      </div>
    </aside>
  );
}