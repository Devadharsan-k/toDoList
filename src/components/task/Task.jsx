import { BsFillCheckCircleFill } from 'react-icons/bs';
import { GoTrash } from "react-icons/go";
import styles from "./task.module.css";


const Task = ({ task, onComplete, onDelete}) => {

  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
      {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title} </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <GoTrash size={23}/>
      </button>
    </div>
  )
}

export default Task
