import React from "react";
import { FilterSelection, TasksContextProps, TasksType } from "../types/task.structure";

export const TasksContext = React.createContext<TasksContextProps | undefined>(undefined);

export const TasksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const localSotageTasks = localStorage.getItem("localTasks");
  const savedTasks = localSotageTasks ? JSON.parse(localSotageTasks) as TasksType : []
  const [tasks, setTasks] = React.useState<TasksType>(savedTasks);
  const [filter, setFilter] = React.useState<string>("");
  const [filterText, setFilterText] = React.useState<string>("");
  const [filterSelection, setFilterSelection] = React.useState<FilterSelection>("");

  React.useEffect(() => {
    localStorage.setItem("localTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        filter,
        setFilter,
        filterText,
        setFilterText,
        filterSelection,
        setFilterSelection
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
