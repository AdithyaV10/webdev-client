import { useState } from "react";
import { useTodosContext } from "./todosContext";
export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("Learn Context");
  const [editingId, setEditingId] = useState<string | null>(null);
  return <div id="wd-context-todo-list">
    <h3>Context Todo List</h3>
    <form onSubmit={e => { e.preventDefault(); if (!title.trim()) return; if (editingId) updateTodo({ id: editingId, title }); else addTodo(title); setEditingId(null); setTitle(""); }}>
      <input id="wd-context-todo-title" aria-label="Context todo title" value={title} onChange={e => setTitle(e.target.value)} />
      <button type="submit">{editingId ? "Update" : "Add"}</button>
    </form>
    <ul>{todos.map(todo => <li key={todo.id}><span>{todo.title}</span><button type="button" onClick={() => { setTitle(todo.title); setEditingId(todo.id); }}>Edit</button><button type="button" onClick={() => { deleteTodo(todo.id); if (editingId === todo.id) { setEditingId(null); setTitle(""); } }}>Delete</button></li>)}</ul>
  </div>;
}
