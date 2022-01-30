import "./Add.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTask } from "../../JS/Action/ActionTask";
const AddTask = () => {
  const [text, setText] = useState("");
  const despatch = useDispatch();
  const handlAdd = () => {
    if (text) {
      despatch(addTask({ id: Math.random(), text: text, done: false }));
      setText("");
    } else {
      alert("You should put something");
    }
  };
  return (
    <div className="addName">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handlAdd}>ADD</button>
    </div>
  );
};

export default AddTask;
