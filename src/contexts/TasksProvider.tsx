import React, { createContext, useState, ReactNode } from "react";
import { TasksContextProps, TasksType } from "../types/task.structure";

export const TasksContext = createContext<TasksContextProps | undefined>(undefined);

export const TasksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<TasksType>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [filterText, setFilterText] = useState<string>("");

  React.useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        newTask,
        setNewTask,
        filterText,
        setFilterText,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
