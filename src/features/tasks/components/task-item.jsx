export function TaskItem({ task, onToggle }) {
  const isCompleted = task.status === "completed";

  return (
    <label className="flex cursor-pointer items-start gap-4">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => onToggle(task.id)}
        className="mt-1 h-5 w-5 rounded-sm border border-white/60 bg-transparent accent-white"
      />

      <span
        className={`text-[1.15rem] leading-8 ${
          isCompleted ? "text-white/40 line-through" : "text-white/85"
        }`}
      >
        {task.title}
      </span>
    </label>
  );
}