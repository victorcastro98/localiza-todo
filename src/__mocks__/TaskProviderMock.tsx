import React from "react";
import { TasksProvider } from "../contexts/TasksProvider";
const TasksProviderMock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <TasksProvider>
    {children}
  </TasksProvider>
);

export default TasksProviderMock;