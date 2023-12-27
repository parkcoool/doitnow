import styles from "./styles.module.css";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";

interface MenuProps {
    task: Task;
}

function Menu({ task }: MenuProps) {
    return (
        <div className={styles.menu}>
            <button className={styles.menuButton}>
                <img src={deleteIcon} alt="삭제"></img>
                <span>삭제</span>
            </button>
            <button className={styles.menuButton}>
                <img src={editIcon} alt="편집"></img>
                <span>편집</span>
            </button>
        </div>
    );
}

export default Menu;
