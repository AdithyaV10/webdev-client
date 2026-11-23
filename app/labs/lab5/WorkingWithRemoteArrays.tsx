"use client";
import { useState } from "react";
export default function WorkingWithRemoteArrays() {
  const API = `${process.env.NEXT_PUBLIC_HTTP_SERVER}/lab5/todos`;
  const [id, setId] = useState("1"), [title, setTitle] = useState("Updated Task");
  const [description, setDescription] = useState("Task description"), [completed, setCompleted] = useState(true);
  const item = `${API}/${encodeURIComponent(id)}`;
  return <section><h3>Working with Arrays</h3>
    <h4>Retrieving Arrays</h4><a id="wd-retrieve-todos" href={API}>Get Todos</a>
    <h4>Retrieving an Item from an Array by ID</h4>
    <label>ID <input id="wd-todo-id" value={id} onChange={e => setId(e.target.value)} /></label>
    <a id="wd-retrieve-todo-by-id" href={item}>Get Todo by ID</a>
    <h4>Filtering Array Items</h4><a id="wd-retrieve-completed-todos" href={`${API}?completed=true`}>Get Completed Todos</a>
    <h4>Creating new Items in an Array</h4><a id="wd-create-todo" href={`${API}/create`}>Create Todo</a>
    <h4>Removing from an Array</h4><a id="wd-remove-todo" href={`${item}/delete`}>Remove Todo with ID = {id}</a>
    <h4>Updating an Item in an Array</h4>
    <label>Title <input id="wd-todo-title" value={title} onChange={e => setTitle(e.target.value)} /></label>
    <a id="wd-update-todo-title" href={`${item}/title/${encodeURIComponent(title)}`}>Update Todo</a><br />
    <label><input id="wd-todo-completed" type="checkbox" checked={completed} onChange={e => setCompleted(e.target.checked)} />Completed</label>
    <a id="wd-update-todo-completed" href={`${item}/completed/${completed}`}>Complete Todo ID = {id}</a><br />
    <label>Description <input id="wd-todo-description" value={description} onChange={e => setDescription(e.target.value)} /></label>
    <a id="wd-update-todo-description" href={`${item}/description/${encodeURIComponent(description)}`}>Describe Todo ID = {id}</a>
  </section>;
}
