import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  TODO_FETCH_ITEMS_SUCCESS,
  TODO_FETCH_ITEMS_REQUEST,
  TODO_ADD_ITEM_REQUEST,
  TODO_ADD_ITEM_SUCCESS,
  TODO_DELETE_ITEM_REQUEST,
  TODO_DELETE_ITEM_SUCCESS,
  TODO_EDIT_ITEM_REQUEST,
  TODO_EDIT_ITEM_SUCCESS,
  TODO_SEARCH_ITEM_SUCCESS,
  TODO_SEARCH_ITEM_REQUEST,
} from "../constants/todoConstants";

function* fetchTodoItems() {
  try {
    const { data } = yield call(() => axios.get("/todos"));
    yield put({ type: TODO_FETCH_ITEMS_SUCCESS, payload: data });
  } catch (err) {
    console.error(err);
  }
}

export function* watchFetchTodoItems() {
  yield takeLatest(TODO_FETCH_ITEMS_REQUEST, fetchTodoItems);
}

function* addTodoItems(action) {
  try {
    const config = {
      "Content-Type": "application/json",
    };
    const { data } = yield call(
      (item, config) => axios.post("/todos", item, config),
      action.payload,
      config
    );

    yield put({ type: TODO_ADD_ITEM_SUCCESS, payload: data });
  } catch (err) {
    console.error(err);
  }
}

export function* watchAddTodoItem() {
  yield takeLatest(TODO_ADD_ITEM_REQUEST, addTodoItems);
}

function* deleteTodoItems(action) {
  try {
    yield call((itemId) => axios.delete(`/todos/${itemId}`), action.payload);

    yield put({ type: TODO_DELETE_ITEM_SUCCESS, payload: action.payload });
  } catch (err) {
    console.error(err);
  }
}

export function* watchDeleteTodoItem() {
  yield takeLatest(TODO_DELETE_ITEM_REQUEST, deleteTodoItems);
}

function* editTodoItems(action) {
  try {
    const config = {
      "Content-Type": "application/json",
    };
    const { data } = yield call(
      (item, config) => axios.put(`/todos/${action.payload.id}`, item, config),
      action.payload,
      config
    );

    yield put({ type: TODO_EDIT_ITEM_SUCCESS, payload: data });
  } catch (err) {
    console.error(err);
  }
}

export function* watchEditTodoItem() {
  yield takeLatest(TODO_EDIT_ITEM_REQUEST, editTodoItems);
}

function* searchTodoItems(action) {
  try {
    const { data } = yield call(
      (key) => axios.get(`/todos?title_like=${key}`),
      action.payload.filter.key
    );
    yield put({
      type: TODO_SEARCH_ITEM_SUCCESS,
      payload: { filter: action.payload.filter, data },
    });
  } catch (err) {
    console.error(err);
  }
}

export function* watchSearchTodoItems() {
  yield takeLatest(TODO_SEARCH_ITEM_REQUEST, searchTodoItems);
}
