"use client";
import { useEffect, useState } from "react";
import { FaTrash, FaPencilAlt, FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";
export default function WorkingWithRemoteArraysAsynchronously() {
  const [todos, setTodos] = useState<client.Todo[]>([]);
  const [pending, setPending] = useState(true), [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    client.fetchTodos().then(rows => { if (active) setTodos(rows); })
      .catch(error => { if (active) setError(client.errorMessage(error)); })
      .finally(() => { if (active) setPending(false); });
    return () => { active = false; };
  }, []);
  const run = async (action: () => Promise<void>) => {
    setError(""); setPending(true);
    try { await action(); } catch (error) { setError(client.errorMessage(error)); }
    finally { setPending(false); }
  };
  const update = (todo: client.Todo) => run(async () => {
    await client.updateTodo(todo);
    setTodos(rows => rows.map(t => t.id === todo.id ? { ...todo, editing: false } : t));
  });
  return <section id="wd-remote-arrays-async"><h3>Working with Arrays Asynchronously</h3>
    {error && <p id="wd-todo-error-message" role="alert" className="rounded bg-red-100 px-3 py-2 text-red-800">{error}</p>}
    {pending && <p role="status">Loading todos...</p>}
    <h4>Promises and Async/Await</h4>
    <button type="button" disabled={pending} onClick={() => run(async () => setTodos(await client.fetchTodosWithPromise()))}>Fetch Todos with Promise</button>
    <h4>Creating Data with GET and POST</h4>
    <button id="wd-create-todo-async" type="button" disabled={pending} aria-label="Create todo with GET" onClick={() => run(async () => setTodos(await client.createNewTodo()))}><FaPlusCircle className="text-green-600" /> GET</button>
    <button id="wd-post-todo" type="button" disabled={pending} aria-label="Post todo" onClick={() => run(async () => {
      const created = await client.postNewTodo({ title: "New Posted Todo", completed: false }); setTodos(rows => [...rows, created]);
    })}><FaPlusCircle className="text-blue-600" /> POST</button>
    <h4>Updating with PUT and Deleting with DELETE</h4>
    <ul>{todos.map((todo, index) => <li key={todo.id} data-todo-id={todo.id}>
      <input aria-label={`Complete ${todo.id}`} type="checkbox" checked={todo.completed} disabled={pending} onChange={e => update({ ...todo, completed: e.target.checked })} />{" "}
      {todo.editing ? <input aria-label={`Edit ${todo.id}`} autoFocus disabled={pending} value={todo.title}
        onChange={e => setTodos(rows => rows.map(t => t.id === todo.id ? { ...t, title: e.target.value } : t))}
        onKeyDown={e => { if (e.key === "Enter") void update(todo); }} /> : <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>}
      <button type="button" disabled={pending} aria-label={`Edit todo ${todo.id}`} onClick={() => setTodos(rows => rows.map(t => t.id === todo.id ? { ...t, editing: true } : t))}><FaPencilAlt /></button>
      <button id={`wd-remove-todo-${todo.id}`} type="button" disabled={pending} aria-label={`Remove todo ${todo.id} with GET`} onClick={() => run(async () => setTodos(await client.removeTodo(todo)))}><FaTrash className="text-red-600" /></button>
      <button id={index === 0 ? "wd-delete-todo" : `wd-delete-todo-${todo.id}`} type="button" disabled={pending} aria-label={`Delete todo ${todo.id}`} onClick={() => run(async () => {
        await client.deleteTodo(todo); setTodos(rows => rows.filter(t => t.id !== todo.id));
      })}><TiDelete className="text-red-600" /></button>
    </li>)}</ul>
    <h4>Handling Errors</h4>
    <p>Delete a displayed todo with its GET delete link in another tab, then use its X button here to see the 404 error.</p>
  </section>;
}
