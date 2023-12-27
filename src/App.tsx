import TaskList from "./components/TaskList";
import Calendar from "./components/Calendar";

import useTask from "./hooks/useTask";

function App() {
    const { tasks } = useTask((state) => state);

    return (
        <div className="App">
            <Calendar />
            <TaskList tasks={tasks} />
        </div>
    );
}

export default App;
