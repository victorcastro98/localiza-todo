import { useTasksContext } from "../../hooks/useTasksContext";
import useTasks from "../../hooks/useTasks";

function Home() {
  const { tasks, setTasks, newTask, setNewTask, filterText, setFilterText } =
    useTasksContext();
  const { addTask, editTask, toggleTaskCompletion, removeTask } = useTasks();
  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        onClick={() => {
          addTask({ text: newTask, tasks, setTasks });
        }}
      >
        Adicionar
      </button>

      <input
        type="text"
        placeholder="Filtrar por texto"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="text"
              value={task.text}
                onChange={(event) => {
                  const text = event.target.value
                  editTask({index, text, tasks, setTasks})}}
            />
            <button onClick={() => toggleTaskCompletion({index, tasks, setTasks})}>
              {task.completed ? "Desmarcar" : "Concluir"}
            </button>
            <button onClick={() => removeTask({index, tasks, setTasks})}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
