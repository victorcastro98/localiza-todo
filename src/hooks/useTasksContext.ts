import { useContext } from "react";
import { TasksContext } from "./TasksProvider";
import { TasksContextProps } from "./task.structure";

export const useTasksContext = (): TasksContextProps => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasksContext must be used within a TasksProvider");
  }
  return context;
};