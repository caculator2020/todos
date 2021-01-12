import React, { useState, useEffect, useRef } from "react";
import "./index.css";
function EditableInput({ title = "Hello world", deleteItem, id }) {
  const [isEditing, setIsEditing] = useState(false);
  const [done, setDone] = useState(false);
  const [inputField, setInputField] = useState(title);
  const inputRef = useRef();
  const handleOnchange = (e) => {
    setInputField(e.target.value);
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleDeleteClick = () => {
    deleteItem(id);
  };
  const handleOnblur = () => {
    setIsEditing(false);
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
    <p
      className={done ? "done" : ""}
      onClick={() => {
        setDone(!done);
      }}
    >
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
