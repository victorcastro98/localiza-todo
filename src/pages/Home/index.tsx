import { useTasksContext } from "../../hooks/useTasksContext";
import useTasks from "../../hooks/useTasks";
import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logo from "../../assets/localistaLogo.svg";

function Home() {
  const {
    tasks,
    setTasks,
    filterText,
    setFilterText,
    filterSelection,
    setFilterSelection,
  } = useTasksContext();
  const { addTask, editTask, toggleTaskCompletion, removeTask, completeAllTasks } = useTasks();
  const [newTask, setNewTask] = React.useState<string>("");

  const filteredTasks = React.useMemo(() => {
    return tasks.filter((task) => {
      const matchesText = task.text
        .toLowerCase()
        .includes(filterText.toLowerCase());
      const matchesSelection =
        filterSelection === "" ||
        (filterSelection === "concluded" && task.completed) ||
        (filterSelection === "notConcluded" && !task.completed);
      return matchesText && matchesSelection;
    });
  }, [tasks, filterText, filterSelection]);

  const tasksList = React.useMemo(() => {
    return filteredTasks.map((task, index) => (
      <li className="flex flex-row gap-2 mb-2 justify-between" key={index}>
        <Input
          value={task.text}
          action={(event) => {
            const text = event.target.value;
            editTask({ index, text, tasks, setTasks });
          }}
        />
        <div className="flex gap-2">
          <Button
            text={task.completed ? "Desmarcar" : "Concluir"}
            action={() => toggleTaskCompletion({ index, tasks, setTasks })}
          />
          <Button
            text="Remover"
            action={() => removeTask({ index, tasks, setTasks })}
          />
        </div>
      </li>
    ));
  }, [
    editTask,
    filteredTasks,
    removeTask,
    setTasks,
    tasks,
    toggleTaskCompletion,
  ]);


  return (
    <div className="text-white bg-green-dark w-full min-h-screen h-full flex flex-col items-center">
      <div className="w-full bg-white p-2 flex flex-row gap-4 justify-center">
        <img className="h-[30px]" src={logo} alt="logo" />
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
      <ul className="w-fit p-3">
        <div className="flex flex-row gap-2 items-center justify-between w-full">
          <h1>Lista de Tarefas</h1>
          <Button text="Todos" action={() => setFilterSelection("")} />
          <Button
            text="Concluídos"
            action={() => setFilterSelection("concluded")}
          />
          <Button
            text="Não Concluídos"
            action={() => setFilterSelection("notConcluded")}
          />
        </div>
        <div className="w-full h-[1px] bg-white my-2" />
        <div className="flex flex-row gap-2 items-center justify-end w-full">
          <Button
            type="secondary"
            text="Concluir todos"
            action={() => completeAllTasks({ tasks, setTasks })}
          />
          <Button
            type="danger"
            text="Excluir concluidos"
            action={() => setTasks(tasks.filter(task => task.completed === false))}
          />
        </div>
        <div className="w-full h-[1px] bg-white my-2" />
        {tasksList}
      </ul>
    </div>
  );
}

export default Home;
