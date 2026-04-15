import { useTasks } from "../hooks/use-tasks";
import { TaskList } from "../components/task-list";

export function TodoPage() {
  const { groupedTasks, toggleTaskStatus } = useTasks();

  return (
    <section className="flex h-full flex-col overflow-hidden">
      <div className="flex items-center gap-3 px-1 text-sm font-medium text-white/60">
        <span>Home</span>
        <span>/</span>
        <span>TODO</span>
        <span>/</span>
        <span>17 Abril 2026</span>
      </div>

      <div className="mt-5 flex-1 overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/20 p-10 shadow-2xl backdrop-blur-xl">
        <div className="h-full overflow-y-auto pr-2">
          <TaskList groupedTasks={groupedTasks} onToggle={toggleTaskStatus} />
        </div>
      </div>
    </section>
  );
}