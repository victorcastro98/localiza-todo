

export type Task = { text: string; completed: boolean };
export type TasksType = Task[];
export type SetTasksType = React.Dispatch<React.SetStateAction<TasksType>>; 

export interface ITaskType01 {
    index?: number;
    text: string;
    tasks: TasksType;
    setTasks: SetTasksType;
}
export interface ITaskType02 {
    index: number;
    tasks: TasksType;
    setTasks: SetTasksType;
}
export interface TasksContextProps {
    tasks: TasksType, 
    setTasks: SetTasksType, 
    newTask: string, 
    setNewTask: React.Dispatch<React.SetStateAction<string>>, 
    filterText: string, 
    setFilterText: React.Dispatch<React.SetStateAction<string>>
}