import {
  ITaskType01,
  ITaskType02,
  SetTasksType,
  Task,
  TasksType,
} from "../types/task.structure";

export function useTasks() {
  const addTask = ({ text, tasks, setTasks }: ITaskType01) => {
    const newTask: Task = { text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const editTask = ({ index, text, tasks, setTasks }: ITaskType01) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: text } : task
    );
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = ({ index, tasks, setTasks }: ITaskType02) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = ({ index, tasks, setTasks }: ITaskType02) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const completeAllTasks = ({
    tasks,
    setTasks,
  }: {
    tasks: TasksType;
    setTasks: SetTasksType;
  }) => {
    const newTasks = tasks.map((task: Task) => {
      const text = task.text;
      return { text, completed: true }
    });
    setTasks(newTasks)
  };
  return {
    addTask,
    editTask,
    toggleTaskCompletion,
    removeTask,
    completeAllTasks,
  };
}
export default useTasks;
