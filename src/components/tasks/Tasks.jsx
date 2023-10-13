import Task from "../tasks/Tasks";
import styles from "./tasks.module.css";

const Tasks = ({ tasks, onComplete, onDelete}) => {

  const totalTasks = tasks.length;
  const completedTask = tasks.filter(task => task.isCompleted).length;

  return (
    <div className={styles.tasks}>
      <header className={styles.header}>
        <div>
            <p>Created Task</p>
            <span>{totalTasks}</span>
        </div>

        <div>
            <p className={styles.textPurple}>Completed Tasks</p>
            <span>{completedTask} &nbsp; of &nbsp; {totalTasks}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map(task =>(
          <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  )
}

export default Tasks
