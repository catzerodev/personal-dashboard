import { useState } from "react";
import { Pencil, Trash2, Check } from "lucide-react";

export function TaskItem({ task, onToggle, onEdit, onDelete }) {
  const isCompleted = task.status === "completed";

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedStatus, setEditedStatus] = useState(task.status);
  const [editedPriority, setEditedPriority] = useState(task.priority);

  const handleSave = () => {
    if (!editedTitle.trim()) return;

    onEdit(task.id, {
      title: editedTitle.trim(),
      status: editedStatus,
      priority: editedPriority,
    });

    setIsEditing(false);
  };

  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-1 items-start gap-4">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onToggle(task.id)}
          className="mt-[8px]"
        />

        {isEditing ? (
          <div className="flex w-full flex-col gap-3">
            <input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSave();
                }
              }}
              className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white outline-none"
              autoFocus
            />

            <div className="flex flex-wrap gap-3">
              <select
                value={editedStatus}
                onChange={(e) => setEditedStatus(e.target.value)}
                className="rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white outline-none"
              >
                <option value="pending" className="bg-slate-900">
                  Pending
                </option>
                <option value="in-process" className="bg-slate-900">
                  In Process
                </option>
                <option value="completed" className="bg-slate-900">
                  Completed
                </option>
              </select>

              <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white">
                <input
                  type="checkbox"
                  checked={editedPriority}
                  onChange={(e) => setEditedPriority(e.target.checked)}
                />
                <span>Priority</span>
              </label>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <span
              className={`text-[1.15rem] leading-8 ${
                isCompleted ? "text-white/40 line-through" : "text-white/85"
              }`}
            >
              {task.title}
            </span>

            <div className="mt-1 flex flex-wrap items-center gap-2">
              {task.status === "pending" && (
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/65">
                  <span className="h-2 w-2 rounded-full bg-white/40" />
                  Pending
                </span>
              )}

              {task.status === "in-process" && (
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 shadow-[0_0_10px_rgba(251,191,36,0.25)] px-3 py-1 text-xs font-medium text-amber-200">
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  In Process
                </span>
              )}

              {task.status === "completed" && (
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  Completed
                </span>
              )}

              {task.priority && (
                <span className="inline-flex items-center gap-2 rounded-full bg-rose-400/20 px-3 py-1 text-xs font-medium text-rose-200">
                  <span className="h-2 w-2 rounded-full bg-rose-300" />
                  Priority
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 pt-1">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="rounded-full border border-white/15 bg-white/10 p-2 text-white/80 transition hover:bg-white/20"
            title="Save"
          >
            <Check size={16} />
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="rounded-full border border-white/15 bg-white/10 p-2 text-white/80 transition hover:bg-white/20"
            title="Edit"
          >
            <Pencil size={16} />
          </button>
        )}

        <button
          onClick={() => onDelete(task.id)}
          className="rounded-full border border-white/15 bg-white/10 p-2 text-white/80 transition hover:bg-white/20"
          title="Delete"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}