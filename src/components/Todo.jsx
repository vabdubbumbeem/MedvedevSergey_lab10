import React from "react";
import styles from "./Todo.module.css";

function Todo(props) {
    return (
      <div className={styles.block}>
        <img src={props.img} alt={props.img}/>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    );
  }
  
  export default Todo;
  