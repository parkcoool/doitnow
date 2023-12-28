import { useEffect } from "react";

import styles from "./styles.module.css";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";

interface MenuProps {
    task: Task;
    deleteTask: () => void;
    editTask: () => void;
    closeMenu: () => void;
}

function Menu({ task, deleteTask, editTask, closeMenu }: MenuProps) {
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            const target = e.target as HTMLElement;
            if (!target.closest(`#task${task.id} .${styles.right}`)) closeMenu();
        }
        document.addEventListener("click", handleClick);

        return () => document.removeEventListener("click", handleClick);
    });

    return (
        <div className={styles.menu}>
            <button className={styles.menuButton} onClick={deleteTask}>
                <img src={deleteIcon} alt="삭제"></img>
                <span>삭제</span>
            </button>
            <button className={styles.menuButton} onClick={editTask}>
                <img src={editIcon} alt="편집"></img>
                <span>편집</span>
            </button>
        </div>
    );
}

export default Menu;
