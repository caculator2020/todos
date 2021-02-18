import { all } from "redux-saga/effects";
import {
  watchFetchTodoItems,
  watchAddTodoItem,
  watchDeleteTodoItem,
  watchEditTodoItem,
  watchSearchTodoItems,
} from "./todoSaga";

export function* rootWatcher() {
  yield all([
    watchFetchTodoItems(),
    watchAddTodoItem(),
    watchDeleteTodoItem(),
    watchEditTodoItem(),
    watchSearchTodoItems(),
  ]);
}
