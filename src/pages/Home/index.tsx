import { useTasksContext } from "../../hooks/useTasksContext";
import useTasks from "../../hooks/useTasks";
import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Home() {
  const { tasks, setTasks, filterText, setFilterText } = useTasksContext();
  const { addTask, editTask, toggleTaskCompletion, removeTask } = useTasks();
  const [newTask, setNewTask] = React.useState<string>("");

  const tasksList = React.useMemo(() => {
    return tasks.map((task, index) => (
      <li className="flex flex-row gap-2 mb-2" key={index}>
        <Input
          value={task.text}
          action={(event) => {
            const text = event.target.value;
            editTask({ index, text, tasks, setTasks });
          }}
        />
        <Button
          text={task.completed ? "Desmarcar" : "Concluir"}
          action={() => toggleTaskCompletion({ index, tasks, setTasks })}
        />
        <Button
          text="Remover"
          action={() => removeTask({ index, tasks, setTasks })}
        />
      </li>
    ));
  }, [editTask, removeTask, setTasks, tasks, toggleTaskCompletion]);

  return (
    <div className="text-white bg-green-dark w-full min-h-screen h-full flex flex-col items-center">
      <div className="w-full bg-white p-2 flex flex-row gap-4 justify-center">
        <Input
          value={newTask}
          placeholder={"digite nova tarefa"}
          action={(event) => setNewTask(event.target.value)}
        />
        <Button
          text="Adicionar"
          action={() => {
            addTask({ text: newTask, tasks, setTasks });
            setNewTask("");
          }}
        />
        <Input
          value={filterText}
          placeholder={"Filtrar por texto"}
          action={(event) => setFilterText(event.target.value)}
        />
      </div>
      <ul className=" w-fit p-3">
        <h1>Lista de Tarefas</h1>
        {tasksList}
      </ul>
    </div>
  );
}

export default Home;
