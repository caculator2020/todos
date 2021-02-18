import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { todoReducer } from "./reducers/todoReducers";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "./sagas/rootSaga";

const reducer = combineReducers({
  todoItems: todoReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootWatcher);
export default store;
