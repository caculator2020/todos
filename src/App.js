import { useState, useRef, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const App = () => {
  const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"))
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  const [todos, setTodos] = useState(todosFromLocalStorage);
  const [filter, setFilter] = useState({
    key: "",
    status: "all",
    sortType: "ascending",
  });
  const [editing, setEditing] = useState(false);
  const input = useRef();
  const addItem = (e) => {
    e.preventDefault();
    const newItem = {
      title: input.current.value,
      id: new Date().getTime(),
      done: false,
    };
    setTodos([...todosFromLocalStorage, newItem]);
    //save to loalstorage
    localStorage.setItem(
      "todos",
      JSON.stringify([...todosFromLocalStorage, newItem])
    );
    input.current.value = "";
  };
  const deleteItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    //save to localstorage
    localStorage.setItem(
      "todos",
      JSON.stringify(todos.filter((todo) => todo.id !== id))
    );
  };
  const editItem = (item) => {
    setTodos(todos.map((todo) => (todo.id !== item.id ? todo : item)));
    //save to localStorage
    localStorage.setItem(
      "todos",
      JSON.stringify(
        todosFromLocalStorage.map((todo) => (todo.id !== item.id ? todo : item))
      )
    );
    setEditing(!editing);
  };

  const searchItem = (filter) => {
    let filteredTodos = todosFromLocalStorage.filter((todo) =>
      todo.title.toLowerCase().includes(filter.key.toLowerCase())
    );
    switch (filter.status) {
      case "done":
        filteredTodos = filteredTodos.filter((todo) => todo.done);
        break;
      case "doing":
        filteredTodos = filteredTodos.filter((todo) => !todo.done);
        break;
      default:
        break;
    }
    switch (filter.sortType) {
      case "descending":
        filteredTodos.sort((a, b) => a.title.localeCompare(b.title) * -1);
        setTodos(filteredTodos);
        break;
      case "ascending":
        filteredTodos.sort((a, b) => a.title.localeCompare(b.title));
        setTodos(filteredTodos);
        break;
      default:
        setTodos(filteredTodos);
        break;
    }
  };
  useEffect(() => {
    searchItem(filter);
  }, [filter, editing]);

  return (
    <div className="app">
      <div className="app-container">
        <TodoInput
          input={input}
          filter={filter}
          setFilter={setFilter}
          searchItem={searchItem}
          addItem={addItem}
        />
        <TodoList editItem={editItem} deleteItem={deleteItem} todos={todos} />
      </div>
    </div>
  );
};

export default App;
