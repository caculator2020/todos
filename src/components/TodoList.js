import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditableInput from "./EditableInput";
import { fetchTodoItems } from "../actions/todoActions";
const TodoList = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todoItems);

  useEffect(() => {
    dispatch(fetchTodoItems());
  }, [dispatch]);
  return (
    <>
      {todoItems.map((item) => {
        return <EditableInput key={item.id} item={item} />;
      })}
    </>
  );
};
export default TodoList;
