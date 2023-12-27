import TaskList from "./components/TaskList";
import Calendar from "./components/Calendar";

function App() {
    return (
        <div className="App">
            <TaskList
                tasks={[
                    { id: 0, name: "Myyyyyyyyyyyyyy Taskkkkkkkkkkkk", date: new Date().toISOString(), icon: "✏️" },
                    { id: 1, name: "Task 2", date: "2023-12-27T10:38:36.750Z", icon: "💡" },
                    { id: 2, name: "Task 3", date: "2023-12-25T10:38:36.750Z", icon: "⭐" },
                    { id: 3, name: "Task 4", date: "2022-12-27T10:38:36.750Z", icon: "" },
                    { id: 4, name: "Task 5", date: new Date().toISOString(), icon: "" },
                    { id: 5, name: "Task 6", date: new Date().toISOString(), icon: "📖" },
                    { id: 6, name: "Task 7", date: new Date().toISOString(), icon: "" },
                ]}
            />
            <Calendar />
        </div>
    );
}

export default App;
