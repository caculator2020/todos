import React from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../actions/todoActions";
const TodoInput = ({ addItem, input, filter, setFilter }) => {
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    addItem(e);
    setFilter({ ...filter, key: "" });
  };
  const sortFilterHandler = (e) => {
    const sortType = e.target.value;
    setFilter({ ...filter, sortType: sortType });
  };
  const onInputChangeHandler = (e) => {
    const key = e.target.value;
    setFilter({ ...filter, key: key });
  };
  const statusFilterHandler = (e) => {
    const status = e.target.value;
    setFilter({ ...filter, status: status });
  };
  return (
    <>
      <h2 className="app-header">My to-dos</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          className="app-input"
          placeholder="Create or search your todo(s)..."
          ref={input}
          type="text"
          onChange={onInputChangeHandler}
        />
        <div className="app-todoStatus">
          <select onChange={statusFilterHandler} name="todoStatus">
            <option value="all">All</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>

          <select onChange={sortFilterHandler} name="todoStatus">
            <option value="ascending">A-Z</option>
            <option value="descending">Z-A</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default TodoInput;
