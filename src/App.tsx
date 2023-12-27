import TaskList from "./components/TaskList";
import Calendar from "./components/Calendar";

function App() {
    return (
        <div className="App">
            <TaskList
                tasks={[{ id: 0, name: "Myyyyyyyyyyyyyy Taskkkkkkkkkkkk", date: new Date().toISOString(), icon: "✏️" }]}
            />
            <Calendar />
        </div>
    );
}

export default App;
