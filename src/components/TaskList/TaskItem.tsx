import styles from "./styles.module.css";

interface TaskItemProps {
    task: Task;
}

function elapsedTime(date: string) {
    const now = new Date();
    const taskDate = new Date(date);
    const diff = (now.getTime() - taskDate.getTime()) / 1000;

    if (diff < 60) return "방금 전";
    else if (diff < 60 * 60) return `${Math.floor(diff / 60)}분 전`;
    else if (diff < 60 * 60 * 24) return `${Math.floor(diff / (60 * 60))}시간 전`;
    else if (diff < 60 * 60 * 24 * 30) return `${Math.floor(diff / (60 * 60 * 24))}일 전`;
    else if (diff < 60 * 60 * 24 * 365) return `${Math.floor(diff / (60 * 60 * 24 * 30))}개월 전`;
    else return `${Math.floor(diff / (60 * 60 * 24 * 365))}년 전`;
}

function TaskItem({ task }: TaskItemProps) {
    return (
        <div className={styles.task}>
            <div className={styles.done}>{task.done ? "✅" : "⬜"}</div>
            <div className={styles.info}>
                <h1>{task.name}</h1>
                <h2>{elapsedTime(task.date)}</h2>
            </div>
        </div>
    );
}

export default TaskItem;
