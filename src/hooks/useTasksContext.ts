import { useContext } from "react";
import { TasksContext } from "../contexts/TasksProvider";
import { TasksContextProps } from "../types/task.structure";

export const useTasksContext = (): TasksContextProps => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasksContext must be used within a TasksProvider");
  }
  return context;
};