import axios from "axios";
import {
  TODO_ADD_ITEM,
  TODO_EDIT_ITEM,
  TODO_DELETE_ITEM,
  TODO_SERACH_ITEM,
  TODO_FETCH_ITEMS,
} from "../constants/todoConstants";

export const addTodoItem = (title) => async (dispatch) => {
  try {
    const item = {
      title,
      id: new Date().getTime(),
      done: false,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/todos", item, config);
    dispatch({
      type: TODO_ADD_ITEM,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};
export const deleteTodoItem = (itemId) => async (dispatch) => {
  try {
    await axios.delete(`/todos/${itemId}`);
    dispatch({
      type: TODO_DELETE_ITEM,
      payload: itemId,
    });
  } catch (err) {
    console.error(err);
  }
};
export const editTodoItem = (item) => async (dispatch) => {
  try {
    const config = {
      "Content-Type": "application-json",
    };
    const { data } = await axios.put("/todos", item, config);
    dispatch({
      type: TODO_EDIT_ITEM,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
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
export const fetchTodoItems = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/todos");
    dispatch({
      type: TODO_FETCH_ITEMS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};
