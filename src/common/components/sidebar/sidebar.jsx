import { NavLink } from "react-router";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/todo", label: "TODO" },
  { to: "/priority-task", label: "Priority Task" },
  { to: "/task-in-process", label: "Task in process" },
  { to: "/completed-task", label: "Completed Task" },
  { to: "/calendar", label: "Calendar" },
  { to: "/files", label: "Files" },
];

export default function Sidebar() {
  return (
    <aside className="w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl lg:min-h-screen lg:w-72 lg:border-r lg:border-b-0">
      <div className="flex h-full flex-col px-4 py-6 lg:px-5 lg:py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold tracking-tight text-white">
            iDash
          </h1>
        </div>

        <nav className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `min-w-fit rounded-2xl border px-5 py-4 text-sm transition lg:w-full ${
                  isActive
                    ? "border-white/20 bg-white/15 text-white shadow-lg"
                    : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
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