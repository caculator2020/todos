import { useState, useRef } from "react";
import EditableInput from "./components/EditableInput";

function App() {
  let [todos, setTodos] = useState([
    { title: "Do the dishes", id: 0 },
    { title: "Take out the trash", id: 1 },
    { title: "Finish doing laundry", id: 2 },
  ]);
  const input = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { title: input.current.value, id: todos.length }]);
    input.current.value = "";
  };
  const deleteItem = (id) => {
    delete todos[id];
    setTodos([...todos]);
  };
  const renderList = () =>
    todos.map((item) => {
      if (item) {
        return (
          <EditableInput
            key={item.id}
            deleteItem={deleteItem}
            title={item.title}
            id={item.id}
          />
        );
      }
    });

  return (
    <div className="app">
      <div className="app-container">
        <h2 className="app-header">My to-dos</h2>
        <form onSubmit={onSubmit}>
          <input
            className="app-input"
            placeholder="Create a new todo..."
            ref={input}
            type="text"
          />
        </form>
        {renderList()}
      </div>
    </div>
  );
}

export default App;
