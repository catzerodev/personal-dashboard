import { FilteredTaskList } from "../components/filtered-task-list";
import { useTasks } from "../hooks/use-tasks";

export function PriorityTaskPage() {
  const { priorityTasks, toggleTaskStatus, editTask, deleteTask } = useTasks();

  return (
    <section className="flex h-full flex-col overflow-hidden">
      <div className="flex items-center gap-3 px-1 text-sm font-medium text-white/60">
        <span>Home</span>
        <span>/</span>
        <span>Priority Task</span>
        <span>/</span>
        <span>17 Abril 2026</span>
      </div>

      <div className="mt-5 flex-1 overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/20 p-10 shadow-2xl backdrop-blur-xl">
        <div className="h-full overflow-y-auto pr-2">
          <FilteredTaskList
            title="Priority Tasks"
            tasks={priorityTasks}
            onToggle={toggleTaskStatus}
            onEdit={editTask}
            onDelete={deleteTask}
          />
        </div>
      </div>
    </section>
  );
}