import { TaskItem } from "./task-item";
import { Minus } from "lucide-react";

const groupIcons = {
  meeting: "🔎",
  research: "🧠",
  design: "🎨",
};

export function TaskList({
  groupedTasks,
  onToggle,
  onEdit,
  onDelete,
  onDeleteGroup,
}) {
  return (
    <div className="space-y-12">
      {groupedTasks.map((group) => (
        <div key={group.id}>
          <div className="group mb-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 leading-none">
              <span className="text-2xl">{groupIcons[group.id] ?? "✨"}</span>

              <h3 className="text-4xl font-semibold tracking-tight text-white">
                {group.title}
              </h3>
            </div>

            <button
              onClick={() => onDeleteGroup(group.id)}
              className="rounded-full p-2 text-white/40 opacity-0 transition-all duration-200 hover:scale-110 hover:bg-white/10 hover:text-white group-hover:opacity-100"
              title="Remove category"
            >
              <Minus size={16} />
            </button>
          </div>

          <div className="space-y-3 pl-9">
            {group.tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggle}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
