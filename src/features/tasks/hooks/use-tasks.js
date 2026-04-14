import { useMemo } from "react";
import { useTasksContext } from "./use-tasks-context";

export function useTasks() {
  const { groups, tasks, toggleTaskStatus, addGroup, addTask } = useTasksContext();

  const priorityTasks = useMemo(
    () => tasks.filter((task) => task.priority),
    [tasks]
  );

  const inProcessTasks = useMemo(
    () => tasks.filter((task) => task.status === "in-process"),
    [tasks]
  );

  const completedTasks = useMemo(
    () => tasks.filter((task) => task.status === "completed"),
    [tasks]
  );

  const pendingTasks = useMemo(
    () => tasks.filter((task) => task.status === "pending"),
    [tasks]
  );

  const groupedTasks = useMemo(
    () =>
      groups.map((group) => ({
        ...group,
        tasks: tasks.filter((task) => task.groupId === group.id),
      })),
    [groups, tasks]
  );

  const stats = useMemo(
    () => ({
      total: tasks.length,
      priority: priorityTasks.length,
      inProcess: inProcessTasks.length,
      completed: completedTasks.length,
      pending: pendingTasks.length,
    }),
    [tasks, priorityTasks, inProcessTasks, completedTasks, pendingTasks]
  );

  return {
    groups,
    tasks,
    groupedTasks,
    priorityTasks,
    inProcessTasks,
    completedTasks,
    pendingTasks,
    stats,
    toggleTaskStatus,
    addGroup,
    addTask,
  };
}