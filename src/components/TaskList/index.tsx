import TaskItem from "./TaskItem";

import styles from "./styles.module.css";

interface TaskListProps {
    tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
    const undoneTasks: Task[] = [];
    const doneTasks: Task[] = [];

    tasks.forEach((task) => {
        if (task.done) doneTasks.push(task);
        else undoneTasks.push(task);
    });

    return (
        <div className={styles.taskContainer}>
            {undoneTasks.map((task) => (
                <TaskItem task={task} key={task.id} />
            ))}
            {doneTasks.map((task) => (
                <TaskItem task={task} key={task.id} />
            ))}
        </div>
    );
}

export default TaskList;
