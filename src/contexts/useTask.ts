import { create } from "zustand";

interface TaskState {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (id: number) => void;
    removeAllTasks: () => void;
}

const initialState = {
    tasks: [
        { id: 0, name: "Myyyyyyyyyyyyyy Taskkkkkkkkkkkk", date: new Date().toISOString(), icon: "✏️", done: true },
        { id: 1, name: "Task 2", date: "2023-12-27T10:38:36.750Z", icon: "💡" },
        { id: 2, name: "Task 3", date: "2023-12-25T10:38:36.750Z", icon: "⭐" },
        { id: 3, name: "Task 4", date: "2022-12-27T10:38:36.750Z", icon: "", done: true },
        { id: 4, name: "Task 5", date: "2022-12-27T13:38:36.750Z", icon: "", done: true },
        { id: 5, name: "Task 6", date: "2022-12-27T10:38:36.750Z", icon: "📖" },
        { id: 6, name: "Task 7", date: "2023-12-23T10:38:36.750Z", icon: "" },
    ],
};

const useTask = create<TaskState>((set) => ({
    ...initialState,

    addTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
    removeTask: (id: number) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
    removeAllTasks: () => set(() => ({ tasks: [] })),
}));

export default useTask;
