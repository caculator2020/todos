import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditableInput from "./EditableInput";
import { fetchTodoItems } from "../actions/todoActions";
import { Todo } from "../actions/todoTypes";
import { DefaultRootState } from "../store";
const TodoList = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state: DefaultRootState) => state.todoItems);

  useEffect(() => {
    dispatch(fetchTodoItems());
  }, [dispatch]);
  return (
    <>
      {todoItems.map((item: Todo) => {
        return <EditableInput key={item.id} item={item} />;
      })}
    </>
  );
};
export default TodoList;
