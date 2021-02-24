import { Dispatch } from "redux";
import axios from "axios";
import {
  TODO_ADD_ITEM,
  TODO_EDIT_ITEM,
  TODO_DELETE_ITEM,
  TODO_SERACH_ITEM,
  TODO_FETCH_ITEMS,
} from "../constants/todoConstants";
import {
  Todo,
  Filter,
  AddTodo,
  DeleteTodo,
  EditTodo,
  SearchTodo,
  FetchTodo,
} from "./todoTypes";
export const addTodoItem = (title: string) => async (
  dispatch: Dispatch<AddTodo>
) => {
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
export const deleteTodoItem = (itemId: number) => async (
  dispatch: Dispatch<DeleteTodo>
) => {
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
export const editTodoItem = (item: Todo) => async (
  dispatch: Dispatch<EditTodo>
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(`/todos/${item.id}`, item, config);
    dispatch({
      type: TODO_EDIT_ITEM,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};
export const searchTodoItem = (
  filter: Filter = { key: "", status: "all", sortBy: "asc" }
) => async (dispatch: Dispatch<SearchTodo>) => {
  try {
    const { data }: { data: Todo[] } = await axios.get(
      `/todos?title_like=${filter.key}`
    );
    dispatch({
      type: TODO_SERACH_ITEM,
      payload: {
        filter,
        data,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
export const fetchTodoItems = () => async (dispatch: Dispatch<FetchTodo>) => {
  try {
    const { data }: { data: Todo[] } = await axios.get("/todos");
    dispatch({
      type: TODO_FETCH_ITEMS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};
