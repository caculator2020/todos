import {
  TODO_ADD_ITEM,
  TODO_DELETE_ITEM,
  TODO_EDIT_ITEM,
} from "../constants/todoConstants";
export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case TODO_ADD_ITEM:
      return [...state, action.payload];
    case TODO_DELETE_ITEM:
      console.log("delete_item reducer", action.payload);
      console.log(state.filter((item) => item.id !== action.payload));
      return state.filter((item) => item.id !== action.payload);
    case TODO_EDIT_ITEM:
      return state.map((item) =>
        item.id !== action.payload.id ? item : action.payload
      );
    default:
      return state;
  }
};
