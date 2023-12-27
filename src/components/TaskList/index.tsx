import TaskItem from "./TaskItem";

import styles from "./styles.module.css";

interface TaskListProps {
    tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
    return (
        <div className={styles.taskContainer}>
            {tasks.map((task) => (
                <TaskItem task={task} key={task.id} />
            ))}
        </div>
    );
}

export default TaskList;
