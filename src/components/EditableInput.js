import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { editTodoItem, deleteTodoItem } from "../actions/todoActions";
function EditableInput({ item }) {
  //useDispatch
  const dispatch = useDispatch();
  //useState
  const [isEditing, setIsEditing] = useState(false);
  const [inputField, setInputField] = useState(item.title);
  const [done, setDone] = useState(item.done);
  const inputRef = useRef();
  //event handlers
  const onBlurHandler = () => {
    setIsEditing(false);
    dispatch(editTodoItem({ ...item, title: inputField }));
  };
  const deleteItemHandler = () => {
    dispatch(deleteTodoItem(item.id));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setIsEditing(false);
    dispatch(editTodoItem({ ...item, title: inputField }));
  };
  const markAsDoneHandler = () => {
    setDone(!done);
    dispatch(editTodoItem({ ...item, done: !done }));
  };
  const inputForm = (
    <form onSubmit={submitHandler}>
      <input
        ref={inputRef}
        defaultValue={inputField}
        onChange={(e) => setInputField(e.target.value)}
        onBlur={onBlurHandler}
        type="text"
      />
    </form>
  );
  const labelFiled = <p onClick={markAsDoneHandler}>{inputField}</p>;
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
  return (
    <div className="editableInput">
      <div className={`editableInput-container ${done ? "done" : ""}`}>
        {isEditing ? inputForm : labelFiled}
        <div className="editableInput-edit" onClick={() => setIsEditing(true)}>
          <i className="fas fa-edit"></i>
        </div>
        <div className="editableInput-delete" onClick={deleteItemHandler}>
          <i className="fas fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
}
export default EditableInput;
