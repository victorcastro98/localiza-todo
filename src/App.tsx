import { TasksProvider } from "./hooks/TasksProvider";
import Home from "./pages/Home"

function App() {
  return (
    <TasksProvider>
      <>Localiza</>
      <Home />
    </TasksProvider>
  );
}

export default App;
