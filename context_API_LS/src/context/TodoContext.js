import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, todo: "message", completed: false }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}
