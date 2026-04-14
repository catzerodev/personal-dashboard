import { useContext } from "react";
import { TasksContext } from "../context/tasks-context";

export function useTasksContext() {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasksContext must be used within a TasksProvider");
  }

  return context;
}