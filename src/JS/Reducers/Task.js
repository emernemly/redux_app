import {
  ADD_TASK,
  CHECK_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from "../ActionType/Type";

const initialState = {
  tasks: [
    {
      id: Math.random(),
      text: "Task1",
      done: false,
    },
    {
      id: Math.random(),
      text: "Task2",
      done: false,
    },
  ],
};
const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id ? { ...task, text: payload.newTAsk } : task
        ),
      };
    case CHECK_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload ? { ...el, done: !el.done } : el
        ),
      };

    default:
      return state;
  }
};
export default taskReducer;
