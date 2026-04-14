import { TaskItem } from "./task-item";

export function TaskList({ groupedTasks, onToggle }) {
  return (
    <div className="space-y-6">
      {groupedTasks.map((group) => (
        <div key={group.id}>
          <h3 className="mb-3 text-lg font-medium text-white/90">
            {group.title}
          </h3>

          <div className="space-y-1">
            {group.tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggle}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}