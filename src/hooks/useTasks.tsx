import { ITaskType01, ITaskType02, Task } from "./task.structure";

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

  const removeTask = ({ index, tasks, setTasks }: ITaskType02 ) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };


  return {
    addTask,
    editTask,
    toggleTaskCompletion,
    removeTask,
  };
}
export default useTasks;
