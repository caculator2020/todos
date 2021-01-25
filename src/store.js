import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { todoReducer } from "./reducers/todoReducers";

const reducer = combineReducers({
  todoItems: todoReducer,
});
const middleWare = [thunk];
const todosFromStorage = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
const initialState = {
  todoItems: todosFromStorage,
};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
