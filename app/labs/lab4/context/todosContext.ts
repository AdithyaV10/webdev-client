import { createContext, createElement, useContext, useState, type ReactNode } from "react";
type Todo = { id: string; title: string };
type TodosContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
};
const TodosContext = createContext<TodosContextValue | null>(null);
export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn HTML" }, { id: "2", title: "Learn CSS" }, { id: "3", title: "Learn React" },
  ]);
  const addTodo = (title: string) => setTodos(previous => [...previous, { id: crypto.randomUUID(), title }]);
  const updateTodo = (todo: Todo) => setTodos(previous => previous.map(t => t.id === todo.id ? { ...todo } : t));
  const deleteTodo = (id: string) => setTodos(previous => previous.filter(t => t.id !== id));
  return createElement(TodosContext.Provider, { value: { todos, addTodo, updateTodo, deleteTodo } }, children);
}
export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) throw new Error("useTodosContext must be used inside TodosProvider");
  return value;
}
