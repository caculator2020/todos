import {
  TODO_ADD_ITEM,
  TODO_EDIT_ITEM,
  TODO_DELETE_ITEM,
  TODO_FETCH_ITEMS,
  TODO_SERACH_ITEM,
} from "../constants/todoConstants";
export type Todo = {
  title: string;
  id: number;
  done: boolean;
};
export type Filter = {
  key: string;
  status: string;
  sortBy: string;
};

export interface AddTodo {
  type: typeof TODO_ADD_ITEM;
  payload: Todo;
}
export interface DeleteTodo {
  type: typeof TODO_DELETE_ITEM;
  payload: number;
}
export interface EditTodo {
  type: typeof TODO_EDIT_ITEM;
  payload: Todo;
}
export interface FetchTodo {
  type: typeof TODO_FETCH_ITEMS;
  payload: Todo[];
}
export interface SearchTodo {
  type: typeof TODO_SERACH_ITEM;
  payload: {
    filter: Filter;
    data: Todo[];
  };
}
