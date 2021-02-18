import {
  TODO_ADD_ITEM_REQUEST,
  TODO_EDIT_ITEM_REQUEST,
  TODO_DELETE_ITEM_REQUEST,
  TODO_FETCH_ITEMS_REQUEST,
  TODO_SEARCH_ITEM_REQUEST,
} from "../constants/todoConstants";

export const addTodoItem = (title) => {
  const item = {
    title,
    id: new Date().getTime(),
    done: false,
  };
  return {
    type: TODO_ADD_ITEM_REQUEST,
    payload: item,
  };
};
export const deleteTodoItem = (itemId) => {
  return {
    type: TODO_DELETE_ITEM_REQUEST,
    payload: itemId,
  };
};
export const editTodoItem = (item) => {
  return {
    type: TODO_EDIT_ITEM_REQUEST,
    payload: item,
  };
};
export const searchTodoItem = (
  filter = { key: "", status: "all", sortBy: "asc" }
) => {
  return {
    type: TODO_SEARCH_ITEM_REQUEST,
    payload: {
      filter,
    },
  };
};
export const fetchTodoItems = () => {
  return { type: TODO_FETCH_ITEMS_REQUEST };
};
