"use client";
import { useState } from "react";
export default function WorkingWithRemoteObjects() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const API = `${HTTP_SERVER}/lab5/assignment`, MODULE = `${HTTP_SERVER}/lab5/module`;
  const [title, setTitle] = useState("NodeJS Assignment");
  const [score, setScore] = useState("0"), [completed, setCompleted] = useState(false);
  const [name, setName] = useState("NodeJS"), [description, setDescription] = useState("Express HTTP server");
  return <section><h3>Working With Objects</h3>
    <h4>Retrieving Objects</h4><a id="wd-retrieve-assignments" href={API}>Get Assignment</a>
    <h4>Retrieving Properties</h4><a id="wd-retrieve-assignment-title" href={`${API}/title`}>Get Title</a>
    <h4>Modifying Properties</h4>
    <label>Title <input id="wd-assignment-title" value={title} onChange={e => setTitle(e.target.value)} /></label>
    <a id="wd-update-assignment-title" href={`${API}/title/${encodeURIComponent(title)}`}>Update Title</a><br />
    <label>Score <input id="wd-assignment-score" type="number" value={score} onChange={e => setScore(e.target.value)} /></label>
    <a id="wd-update-assignment-score" href={`${API}/score/${encodeURIComponent(score)}`}>Update Score</a><br />
    <label><input id="wd-assignment-completed" type="checkbox" checked={completed} onChange={e => setCompleted(e.target.checked)} />Completed</label>
    <a id="wd-update-assignment-completed" href={`${API}/completed/${completed}`}>Update Completed</a>
    <h4>Module (On Your Own)</h4>
    <p><a id="wd-retrieve-module" href={MODULE}>Get Module</a> <a id="wd-retrieve-module-name" href={`${MODULE}/name`}>Get Module Name</a></p>
    <label>Name <input id="wd-module-name" value={name} onChange={e => setName(e.target.value)} /></label>
    <a id="wd-update-module-name" href={`${MODULE}/name/${encodeURIComponent(name)}`}>Update Module Name</a><br />
    <label>Description <input id="wd-module-description" value={description} onChange={e => setDescription(e.target.value)} /></label>
    <a id="wd-update-module-description" href={`${MODULE}/description/${encodeURIComponent(description)}`}>Update Module Description</a>
  </section>;
}
