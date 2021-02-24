import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem, searchTodoItem } from "../actions/todoActions";
const TodoInput: React.FC = () => {
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
  const todoInput = useRef<HTMLInputElement>(undefined!);
  //EventHandler
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addTodoItem(input));
    todoInput.current.value = "";
    setFilter({ ...filter, key: "" });
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.value;
    setInput(key);
    setFilter({ ...filter, key });
  };
  const filterHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentFilter = e.target.value;
    switch (currentFilter) {
      case "all":
        setFilter({ ...filter, status: "all" });
        break;
      case "doing":
        setFilter({ ...filter, status: "doing" });
        break;
      case "done":
        setFilter({ ...filter, status: "done" });
        break;
      case "asc":
        setFilter({ ...filter, sortBy: "asc" });
        break;
      case "des":
        setFilter({ ...filter, sortBy: "des" });
        break;
      default:
        break;
    }
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
          <div>
            <strong>Display:</strong>
            {filter.status} <strong>Sort by:</strong>
            {filter.sortBy === "asc" ? "A-Z" : "Z-A"}
          </div>
          <select onChange={filterHandler} name="todoStatus">
            <option value="all">All</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
            <option value="asc">A-Z</option>
            <option value="des">Z-A</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default TodoInput;
