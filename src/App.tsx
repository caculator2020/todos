import React from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app-container">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
