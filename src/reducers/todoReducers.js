import {
  TODO_ADD_ITEM,
  TODO_DELETE_ITEM,
  TODO_EDIT_ITEM,
  TODO_SERACH_ITEM,
} from "../constants/todoConstants";
export const todoReducer = (state = [], action) => {
  let itemsFromStorage = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  switch (action.type) {
    case TODO_ADD_ITEM:
      localStorage.setItem(
        "todos",
        JSON.stringify([...itemsFromStorage, action.payload])
      );
      return [...state, action.payload];
    case TODO_DELETE_ITEM:
      itemsFromStorage = itemsFromStorage.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("todos", JSON.stringify(itemsFromStorage));
      return state.filter((item) => item.id !== action.payload);
    case TODO_EDIT_ITEM:
      itemsFromStorage = itemsFromStorage.map((item) =>
        item.id !== action.payload.id ? item : action.payload
      );

      itemsFromStorage = itemsFromStorage.map((item) =>
        item.id !== action.payload.id ? item : action.payload
      );
      localStorage.setItem("todos", JSON.stringify(itemsFromStorage));
      return state.map((item) =>
        item.id !== action.payload.id ? item : action.payload
      );
    case TODO_SERACH_ITEM:
      const {
        filter: { key },
      } = action.payload;
      const {
        filter: { status },
      } = action.payload;
      const {
        filter: { sortBy },
      } = action.payload;
      //filter by key
      let filteredItems = itemsFromStorage.filter((item) =>
        item.title.toLowerCase().includes(key.toLowerCase())
      );
      //filter by status
      switch (status) {
        case "done":
          filteredItems = filteredItems.filter((item) =>
            item.done ? true : false
          );
          break;
        case "doing":
          filteredItems = filteredItems.filter((item) =>
            item.done ? false : true
          );
          break;
        default:
          break;
      }
      //filter by order
      const asc = sortBy === "asc" ? 1 : -1;
      filteredItems = filteredItems.sort(
        (a, b) => a.title.localeCompare(b.title) * asc
      );
      return filteredItems;
    default:
      return state;
  }
};
