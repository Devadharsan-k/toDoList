/* eslint-disable react/no-unknown-property */
import { useRef, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import todologo from "../../assets/todoLogo.svg";
import styles from "./header.module.css";



const Header = ({ onAddTask }) => {

  const[title, setTitle] = useState("");
  const inputFocus = useRef(null);

  function handleSubmit (e) {
    if(title.length >= 1) {
      e.preventDefault();
      onAddTask(title)
      setTitle("")
      inputFocus.current.focus();
    }
    e.preventDefault();
  }

  function handleChange (e) {
    setTitle(e.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todologo} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input type="text" placeholder="Add a new task" autoFocus value={title} onChange={handleChange} ref={inputFocus} />
        <button>Create <BsFillPlusCircleFill /></button>
      </form>
    </header>
  )
}

export default Header
