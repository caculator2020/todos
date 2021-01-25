import {
  TODO_ADD_ITEM,
  TODO_EDIT_ITEM,
  TODO_DELETE_ITEM,
  TODO_SERACH_ITEM,
} from "../constants/todoConstants";

export const addTodoItem = (title) => {
  const item = {
    title,
    id: new Date().getTime(),
    done: false,
  };
  return {
    type: TODO_ADD_ITEM,
    payload: item,
  };
};
export const deleteTodoItem = (itemId) => {
  return {
    type: TODO_DELETE_ITEM,
    payload: itemId,
  };
};
export const editTodoItem = (item) => {
  return {
    type: TODO_EDIT_ITEM,
    payload: item,
  };
};
export const searchTodoItem = (
  filter = { key: "", status: "all", sortBy: "asc" }
) => {
  return {
    type: TODO_SERACH_ITEM,
    payload: {
      filter,
    },
  };
};
