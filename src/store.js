import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { todoReducer } from "./reducers/todoReducers";
import thunk from "redux-thunk";
const reducer = combineReducers({
  todoItems: todoReducer,
});
const todosFromStorage = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
const initialState = {
  todoItems: todosFromStorage,
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
