import React from "react";
import { useSelector } from "react-redux";
import EditableInput from "./EditableInput";
const TodoList = ({ todos, deleteItem, editItem }) => {
  const todoItems = useSelector((state) => state.todoItems);
  // console.log(todoItems);
  return (
    <>
      {todos.map((item) => {
        return (
          <EditableInput
            key={item.id}
            deleteItem={deleteItem}
            editItem={editItem}
            item={item}
          />
        );
      })}
    </>
  );
};
export default TodoList;
