import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { todoReducer } from "./reducers/todoReducers";

const reducer = combineReducers({
  todoItems: todoReducer,
});
const todosFromStorage = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
const initialState = {
  todoItems: todosFromStorage,
};
const store = createStore(reducer, initialState, composeWithDevTools());

export default store;
