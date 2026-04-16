import { TaskItem } from "./task-item";

export function FilteredTaskList({ title, tasks, onToggle, onEdit, onDelete }) {
  return (
    <div>
      <h2 className="mb-8 text-4xl font-semibold tracking-tight text-white">
        {title}
      </h2>

      {tasks.length === 0 ? (
        <p className="text-white/60">No tasks found.</p>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}