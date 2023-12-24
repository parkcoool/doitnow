import TaskList from "./components/TaskList";
import Calendar from "./components/Calendar";

function App() {
    return (
        <div className="App">
            <TaskList tasks={[{ id: 0, name: "Task 1", date: new Date().toISOString(), done: false }]} />
            <Calendar />
        </div>
    );
}

export default App;
