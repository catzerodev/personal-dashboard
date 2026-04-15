import { useState } from "react";
import { Pencil, Trash2, Check } from "lucide-react";

export function TaskItem({ task, onToggle, onEdit, onDelete }) {
  const isCompleted = task.status === "completed";
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleSave = () => {
    if (!editedTitle.trim()) return;

    onEdit(task.id, editedTitle);
    setIsEditing(false);
  };

  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-1 items-start gap-4">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onToggle(task.id)}
          className="mt-[7px]"
        />

        {isEditing ? (
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
        ) : (
          <span
            className={`text-[1.15rem] leading-8 ${
              isCompleted ? "text-white/40 line-through" : "text-white/85"
            }`}
          >
            {task.title}
          </span>
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