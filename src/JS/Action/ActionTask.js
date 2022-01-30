import {
  ADD_TASK,
  CHECK_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from "../ActionType/Type";

export const addTask = (newTAsk) => {
  return { type: ADD_TASK, payload: newTAsk };
};
export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};
export const editTask = (id, newTAsk) => {
  return { type: EDIT_TASK, payload: { id: id, newTAsk: newTAsk } };
};
export const checkTask = (id) => {
  return { type: CHECK_TASK, payload: id };
};
