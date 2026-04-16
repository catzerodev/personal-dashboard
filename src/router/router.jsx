import { createBrowserRouter } from "react-router";

import { DashboardLayout } from "../common/layouts/dashboard-layout";
import { Dashboard } from "../app/dashboard/dashboard";
import { Todo } from "../app/todo/todo";
import { PriorityTask } from "../app/priority-task/priority-task";
import { TaskInProcess } from "../app/task-in-process/task-in-process";
import { CompletedTask } from "../app/completed-task/completed-task";
import { Calendar } from "../app/calendar/calendar";
import { Files } from "../app/files/files";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "todo", Component: Todo },
      { path: "priority-task", Component: PriorityTask },
      { path: "task-in-process", Component: TaskInProcess },
      { path: "completed-task", Component: CompletedTask },
      { path: "calendar", Component: Calendar },
      { path: "files", Component: Files },
    ],
  },
]);
