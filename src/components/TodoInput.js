import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem, searchTodoItem } from "../actions/todoActions";
const TodoInput = () => {
  //useDispatch
  const dispatch = useDispatch();
  //useState
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState({
    key: "",
    status: "all",
    sortBy: "asc",
  });
  //useRef
  const todoInput = useRef();
  //EventHandler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodoItem(input));
    todoInput.current.value = "";
    setFilter({ ...filter, key: "" });
  };
  const inputHandler = (e) => {
    const key = e.target.value;
    setInput(key);
    setFilter({ ...filter, key });
  };
  useEffect(() => {
    dispatch(searchTodoItem(filter));
  }, [filter]);
  return (
    <>
      <h2 className="app-header">My to-dos</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          ref={todoInput}
          className="app-input"
          placeholder="Create or search your todo(s)..."
          type="text"
          onChange={inputHandler}
        />
        <div className="app-todoStatus">
          <select
            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
            name="todoStatus"
          >
            <option value="all">All</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>

          <select
            onChange={(e) => setFilter({ ...filter, sortBy: e.target.value })}
            name="todoStatus"
          >
            <option value="asc">A-Z</option>
            <option value="des">Z-A</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default TodoInput;
