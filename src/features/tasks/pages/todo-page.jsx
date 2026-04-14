import { useTasks } from "../hooks/use-tasks";
import { TaskList } from "../components/task-list";

export function TodoPage() {
  const { groupedTasks, toggleTaskStatus } = useTasks();

  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-2xl">
      <h2 className="mb-8 text-3xl font-semibold tracking-tight text-white">
        My Tasks
      </h2>

      <TaskList
        groupedTasks={groupedTasks}
        onToggle={toggleTaskStatus}
      />
    </div>
  );
}