import { useEffect, useState } from 'react';
import './Global.css';
import Header from "./components/header/Header";
import Tasks from './components/tasks/Tasks';
const LSK = "todo:savedTasks";

function App() {

  const[tasks, setTasks] = useState([]);

  function loadSavedTask() {
    const saved = localStorage.getItem(LSK)
    if(saved) {
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTask();
  }, [])

  function saveTask(newTask) {
    setTasks(newTask)
    localStorage.setItem(LSK, JSON.stringify(newTask))
  }

  function addTask(taskTitle) {
    saveTask([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ]);
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    saveTask(newTasks);
  }

  function deleteTask(taskId) {
    const newTask = tasks.filter(task => task.id != taskId)
    saveTask(newTask);
  }

  function clearLocalStorage() {
    localStorage.removeItem(LSK);
    setTasks([]);
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks tasks={tasks} onComplete={toggleTaskCompletedById} onDelete={deleteTask} />
      {tasks.length > 1 && (
        <div className="del">
          <button onClick={clearLocalStorage} className="delete">Delete All</button>
        </div>
      )}
    </>
  )
}

export default App
