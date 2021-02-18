import {
  TODO_FETCH_ITEMS_SUCCESS,
  TODO_ADD_ITEM_SUCCESS,
  TODO_DELETE_ITEM_SUCCESS,
  TODO_EDIT_ITEM_SUCCESS,
  TODO_SEARCH_ITEM_SUCCESS,
} from "../constants/todoConstants";
export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case TODO_FETCH_ITEMS_SUCCESS:
      return action.payload;
    case TODO_ADD_ITEM_SUCCESS:
      return [...state, action.payload];
    case TODO_DELETE_ITEM_SUCCESS:
      return state.filter((item) => item.id !== action.payload);
    case TODO_EDIT_ITEM_SUCCESS:
      return state.map((item) =>
        item.id !== action.payload.id ? item : action.payload
      );
    case TODO_SEARCH_ITEM_SUCCESS:
      const { status } = action.payload.filter;
      const { sortBy } = action.payload.filter;
      let filteredItems = action.payload.data;
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
