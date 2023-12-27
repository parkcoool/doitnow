import TaskList from "./components/TaskList";
import Calendar from "./components/Calendar";

import useTask from "./contexts/useTask";

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
