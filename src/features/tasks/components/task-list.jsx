import { TaskItem } from "./task-item";

const groupIcons = {
  meeting: "🔎",
  research: "🧠",
  design: "🎨",
};

export function TaskList({ groupedTasks, onToggle }) {
  return (
    <div className="space-y-12">
      {groupedTasks.map((group) => (
        <div key={group.id}>
          <div className="mb-4 flex items-center gap-3">
            <span className="text-2xl">
              {groupIcons[group.id] ?? "✨"}
            </span>

            <h3 className="text-4xl font-semibold tracking-tight text-white">
              {group.title}
            </h3>
          </div>

          <div className="space-y-3 pl-9">
            {group.tasks.map((task) => (
              <TaskItem key={task.id} task={task} onToggle={onToggle} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}