import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { checkTask, deleteTask } from "../../JS/Action/ActionTask";
import "./task.css";
const Task = ({ task }) => {
  const despatch = useDispatch();
  return (
    <div className="oweadd">
      <div className={task.done && "done"}>{task.text}</div>
      <Link to={`/Edit/${task.id}`}>
        {" "}
        <button>EDIT</button>
      </Link>
      <button onClick={() => despatch(deleteTask(task.id))}>DELETE</button>
      <button onClick={() => despatch(checkTask(task.id))}>
        {" "}
        {!task.done ? "done" : "undone"}
      </button>
    </div>
  );
};

export default Task;
