import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoItem, editTodoItem } from "../actions/todoActions";
function EditableInput({ item, deleteItem, editItem }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [inputField, setInputField] = useState(item.title);
  const inputRef = useRef();
  const handleOnchange = (e) => {
    setInputField(e.target.value);
    editItem({
      ...item,
      title: e.target.value,
    });
    dispatch(
      editTodoItem({
        ...item,
        title: e.target.value,
      })
    );
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const markAsDoneHandler = () => {
    editItem({
      ...item,
      done: !item.done,
    });
  };
  const handleOnblur = () => {
    setIsEditing(false);
  };
  const handleDeleteClick = () => {
    deleteItem(item.id);
    console.log("editableInput", item.id);
    dispatch(deleteTodoItem(item.id));
  };
  const handleOnsubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };
  const inputForm = (
    <form onSubmit={handleOnsubmit}>
      <input
        ref={inputRef}
        defaultValue={inputField}
        onChange={handleOnchange}
        onBlur={handleOnblur}
        type="text"
      />
    </form>
  );
  const labelFiled = (
    <p className={item.done ? "done" : ""} onClick={markAsDoneHandler}>
      {inputField}
    </p>
  );
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
  return (
    <div className="editableInput">
      <div className="editableInput-container">
        {isEditing ? inputForm : labelFiled}
        <div className="editableInput-edit" onClick={handleEditClick}>
          <i className="fas fa-edit"></i>
        </div>
        <div className="editableInput-delete" onClick={handleDeleteClick}>
          <i className="fas fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
}
export default EditableInput;
