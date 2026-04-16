import { NavLink } from "react-router";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/todo", label: "TODO" },
  { to: "/priority-task", label: "Priority Tasks"},
  { to: "/task-in-process", label: "Tasks in Progress" },
  { to: "/completed-task", label: "Completed Tasks" },
  { to: "/calendar", label: "Calendar" },
  { to: "/files", label: "Files" },
];

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-[300px] lg:shrink-0">
      <div className="flex h-full min-h-full flex-col rounded-[28px] border border-white/10 bg-slate-950/55 p-5 shadow-2xl backdrop-blur-2xl">
        <div className="mb-8 px-2 pt-1">
          <h1 className="text-5xl font-medium tracking-[-0.03em] leading-none text-white">iDash</h1>
        </div>

        <nav className="flex gap-3 overflow-x-auto lg:flex-1 lg:flex-col lg:overflow-visible">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `min-w-fit rounded-2xl border px-5 py-4 text-sm font-medium transition lg:w-full ${
                  isActive
                    ? "border-white/20 bg-white/15 text-white shadow-lg"
                    : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}