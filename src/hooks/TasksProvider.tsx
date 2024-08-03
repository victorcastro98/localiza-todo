import React, { createContext, useState, ReactNode } from "react";
import { TasksContextProps, TasksType } from "./task.structure";

export const TasksContext = createContext<TasksContextProps | undefined>(undefined);

export const TasksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<TasksType>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [filterText, setFilterText] = useState<string>("");

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
