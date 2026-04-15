import { useState } from "react";
import { TasksContext } from "./tasks-context";
import { initialGroups, initialTasks } from "../data/tasks";

export function TasksProvider({ children }) {
  const [groups, setGroups] = useState(initialGroups);
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTaskStatus = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status:
                task.status === "completed" ? "in-process" : "completed",
            }
          : task
      )
    );
  };

  const addTask = (groupId, title) => {
    if (!title || !title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      groupId,
      status: "pending",
      priority: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  const editTask = (taskId, newTitle) => {
    if (!newTitle || !newTitle.trim()) return;

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, title: newTitle.trim() }
          : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  const addGroup = (title) => {
    if (!title || !title.trim()) return;

    const newGroup = {
      id: crypto.randomUUID(),
      title: title.trim(),
    };

    setGroups((currentGroups) => [...currentGroups, newGroup]);
  };

  const deleteGroup = (groupId) => {
    setGroups((currentGroups) =>
      currentGroups.filter((group) => group.id !== groupId)
    );

    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.groupId !== groupId)
    );
  };

  return (
    <TasksContext.Provider
      value={{
        groups,
        tasks,
        toggleTaskStatus,
        addTask,
        editTask,
        deleteTask,
        addGroup,
        deleteGroup,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}