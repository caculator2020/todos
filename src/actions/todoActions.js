import {
  TODO_ADD_ITEM,
  TODO_EDIT_ITEM,
  TODO_DELETE_ITEM,
} from "../constants/todoConstants";

export const addTodoItem = (item) => (dispatch, getState) => {
  dispatch({
    type: TODO_ADD_ITEM,
    payload: item,
  });
  //localStorage.setItem("todos", JSON.stringify(getState().todoItems));
};
export const deleteTodoItem = (itemId) => (dispatch, getState) => {
  dispatch({
    type: TODO_DELETE_ITEM,
    payload: itemId,
  });
  //localStorage.setItem("todos", JSON.stringify(getState().todoItems));
};
export const editTodoItem = (item) => (dispatch, getState) => {
  dispatch({
    type: TODO_EDIT_ITEM,
    payload: item,
  });
  // localStorage.setItem("todos", JSON.stringify(getState().todoItems));
};
