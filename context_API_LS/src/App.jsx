import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm.jsx";
import "./App.css";
import { TodoContextProvider } from "./context/TodoContext.js";
import TodoItem from "./components/TodoItem.jsx";
// import TodoItem from "./components/TodoItem.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // console.log("todo : ", todo);
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // upon first loading , get from the local storage
  useEffect(() => {
    // localStorage.clear()
    const todos = JSON.parse(localStorage.getItem("todos")); // getItem (key)
    console.log(todos);

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // another useEffect for whenever todos are added , then need added into local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
