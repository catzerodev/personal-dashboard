import { useState } from "react";
import { TasksContext } from "./tasks-context";
import { initialGroups, initialTasks } from "../data/tasks";

export function TasksProvider({ children }) {
  const groups = initialGroups;
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

  return (
    <TasksContext.Provider
      value={{
        groups,
        tasks,
        toggleTaskStatus,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}