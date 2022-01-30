import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./Edit.css";
import { editTask } from "../JS/Action/ActionTask";
const Edit = ({ match, history }) => {
  const listtask = useSelector((state) => state.taskReducer.tasks);
  const findTask = listtask.find((el) => el.id === +match.params.id);
  const dispatch = useDispatch();
  const [Newtext, setNewtext] = useState("");
  const handelText = (e) => {
    setNewtext(e.target.value);
  };
  const newinput = () => {
    if (Newtext) {
      dispatch(editTask(findTask.id, Newtext));
      history.goBack();
      setNewtext("");
    } else {
      alert("You should put something");
    }
  };
  const back = () => {
    history.goBack();
    setNewtext("");
  };
  return (
    <div className="edit">
      <h1>Your text</h1>
      {findTask.text}
      <div>
        <h1>Put Your New Text</h1>{" "}
        <input onChange={handelText} type="text" value={Newtext} />
      </div>
      <div>
        <button onClick={newinput} id="save">
          Save
        </button>
        <button onClick={back} id="back">
          Back
        </button>
      </div>
    </div>
  );
};

export default Edit;
