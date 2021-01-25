import React from "react";
import { useSelector } from "react-redux";
import EditableInput from "./EditableInput";
const TodoList = () => {
  const todoItems = useSelector((state) => state.todoItems);
  return (
    <>
      {todoItems.map((item) => {
        return <EditableInput key={item.id} item={item} />;
      })}
    </>
  );
};
export default TodoList;
