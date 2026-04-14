export function TaskItem({ task, onToggle }) {
  return (
    <div className="flex items-center gap-3 py-1 hover:opacity-80 transition">
      <input
        type="checkbox"
        checked={task.status === "completed"}
        onChange={() => onToggle(task.id)}
        className="h-4 w-4 accent-purple-400"
      />

      <p
        className={`text-sm ${
          task.status === "completed"
            ? "line-through text-white-40"
            : "text-white/90"
        }`}
      >
        {task.title}
      </p>
    </div>
  );
}