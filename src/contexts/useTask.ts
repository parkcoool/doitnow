import { create } from "zustand";

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [],
};

const useTask = create<TaskState>((set) => ({
    ...initialState,

    addTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
    removeTask: (id: number) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
    removeAllTasks: () => set((state) => ({ tasks: [] })),
}));

export default useTask;
