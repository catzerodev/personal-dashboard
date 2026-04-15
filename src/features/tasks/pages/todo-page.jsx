import { useState, useRef, useEffect } from "react";
import { useTasks } from "../hooks/use-tasks";
import { TaskList } from "../components/task-list";

export function TodoPage() {
  const {
    groups,
    groupedTasks,
    toggleTaskStatus,
    addTask,
    editTask,
    deleteTask,
    addGroup,
    deleteGroup,
  } = useTasks();

  const [showInput, setShowInput] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(groups[0]?.id ?? "meeting");

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAddTask = () => {
    if (!newTask.trim()) return;

    addTask(selectedGroup, newTask);
    setNewTask("");
    setShowInput(false);
  };

  return (
    <section className="flex h-full flex-col overflow-hidden">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-3 text-sm font-medium text-white/60">
          <span>Home</span>
          <span>/</span>
          <span>TODO</span>
          <span>/</span>
          <span>17 Abril 2026</span>
        </div>

        <button
          onClick={() => setShowInput((prev) => !prev)}
          className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black shadow-lg transition hover:scale-105 hover:bg-white active:scale-95"
        >
          <span className="text-lg leading-none">+</span>
          New Task
        </button>
      </div>

      {showInput && (
        <div className="mt-4 flex flex-wrap gap-3">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddTask();
              }
            }}
            placeholder="Write a new task..."
            className="min-w-[240px] flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40"
          />

          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white"
            >
              {groups.find((g) => g.id === selectedGroup)?.title || "Select"}
            </button>

            {showDropdown && (
              <div className="animate-fadeIn absolute right-0 z-50 mt-2 w-56 rounded-xl border border-white/10 bg-slate-900/90 p-2 shadow-xl backdrop-blur-xl">
                {groups.map((group) => (
                  <div
                    key={group.id}
                    onClick={() => {
                      setSelectedGroup(group.id);
                      setShowDropdown(false);
                    }}
                    className={`cursor-pointer rounded-lg px-3 py-2 text-sm transition ${
                      selectedGroup === group.id
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:bg-white/10"
                    }`}
                  >
                    {group.title}
                  </div>
                ))}

                <div className="mt-2 border-t border-white/10 pt-2">
                  <button
                    onClick={() => {
                      const name = window.prompt("New category name:");
                      if (name && name.trim()) {
                        const newId = addGroup(name.trim());
                        if (newId) {
                          setSelectedGroup(newId);
                        }
                      }
                      setShowDropdown(false);
                    }}
                    className="w-full rounded-lg px-3 py-2 text-left text-sm text-white/70 transition hover:bg-white/10"
                  >
                    + New Category
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={handleAddTask}
            className="rounded-xl bg-white/90 px-4 py-3 text-sm font-semibold text-black transition hover:bg-white"
          >
            Add
          </button>
        </div>
      )}

      <div className="mt-5 flex-1 overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/20 p-10 shadow-2xl backdrop-blur-xl">
        <div className="h-full overflow-y-auto pr-2">
          <TaskList
            groupedTasks={groupedTasks}
            onToggle={toggleTaskStatus}
            onEdit={editTask}
            onDelete={deleteTask}
            onDeleteGroup={deleteGroup}
          />
        </div>
      </div>
    </section>
  );
}