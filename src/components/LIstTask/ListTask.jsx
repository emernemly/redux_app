import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
const ListTask = () => {
  const tasks = useSelector((state) => state.taskReducer.tasks);
  const [Checkfilter, setCheckfilter] = useState("ALL");
  return (
    <div>
      <div className="filter">
        <button onClick={() => setCheckfilter("ALL")}> ALL</button>
        <button onClick={() => setCheckfilter("done")}>done</button>
        <button onClick={() => setCheckfilter("undone")}>undone</button>{" "}
      </div>
      {Checkfilter === "done"
        ? tasks
            .filter((task) => task.done === false)
            .map((task) => <Task task={task} key={task.id} />)
        : Checkfilter === "undone"
        ? tasks
            .filter((task) => task.done === true)
            .map((task) => <Task task={task} key={task.id} />)
        : tasks.map((task) => <Task task={task} key={task.id} />)}
    </div>
  );
};

export default ListTask;
