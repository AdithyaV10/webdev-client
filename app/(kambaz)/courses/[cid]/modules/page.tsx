"use client";
import { useState } from "react";
import { ModuleState } from "./ModuleState";
import { secondaryButton, primaryButton, inputClass } from "../../../UI";
import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
  const [collapsed, setCollapsed] = useState(false);
  const [expansion, setExpansion] = useState(0);
  const [published, setPublished] = useState(true);
  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [extra, setExtra] = useState<string[]>([]);
  const [progress, setProgress] = useState("");
  return (
    <ModuleState.Provider value={{ collapsed, setCollapsed, expansion, published }}>
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => { if (collapsed) setExpansion(expansion + 1); setCollapsed(!collapsed); }} className={secondaryButton}>{collapsed ? "Expand All" : "Collapse All"}</button>
        <button type="button" onClick={() => setProgress(document.querySelectorAll("#wd-modules .wd-lesson").length + " lessons; " + (published ? "all published" : "all unpublished"))} className={secondaryButton}>View Progress</button>
        <select aria-label="Module publication" value={published ? "publish-all" : "unpublish-all"} onChange={e => setPublished(e.target.value === "publish-all")} className={secondaryButton}>
          <option value="publish-all">Publish All</option><option value="unpublish-all">Unpublish All</option>
        </select>
        <button type="button" onClick={() => setAdding(!adding)} className={primaryButton}>+ Module</button>
      </div>
      {progress && <p role="status" className="mb-3 text-sm text-neutral-600">{progress}</p>}
      {adding && <form className="mb-4 flex flex-wrap gap-2" onSubmit={e => { e.preventDefault(); setExtra([...extra, title]); setTitle(""); setAdding(false); }}>
        <label htmlFor="wd-new-module" className="sr-only">Module title</label><input id="wd-new-module" required value={title} onChange={e => setTitle(e.target.value)} className={inputClass + " flex-1"} placeholder="Module title" />
        <button className={primaryButton}>Add module</button>
      </form>}
      <ul id="wd-modules" className="m-0 list-none p-0">
        <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Introduction to the course
            </li>

            <li className="wd-content-item">
              Learn what is Web Development
            </li>
          </Lesson>

          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 1 - Introduction
            </li>

            <li className="wd-content-item">
              Full Stack Developer - Chapter 2 - Creating User Interfaces
            </li>
          </Lesson>

          <Lesson title="SLIDES">
            <li className="wd-content-item">
              Introduction to Web Development
            </li>

            <li className="wd-content-item">
              Creating an HTTP server with Node.js
            </li>

            <li className="wd-content-item">
              Creating a React Application
            </li>
          </Lesson>
        </Module>

        <Module title="Week 2">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Learn how to create user interfaces with HTML
            </li>
          </Lesson>

          <Lesson title="READING">
            <li className="wd-content-item">
              HTML elements and page structure
            </li>
          </Lesson>
        </Module>

        <Module title="Week 3">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Learn the fundamentals of CSS and page styling
            </li>
          </Lesson>

          <Lesson title="READING">
            <li className="wd-content-item">
              Introduction to CSS
            </li>
          </Lesson>
        </Module>
        <Module title="Week 4 - Adithya's application review"><Lesson title="PERSONAL REVIEW"><li className="wd-content-item">Review accessibility and responsive layouts</li></Lesson></Module>
        <Module title="Sample module (AI)"><Lesson title="Sample lesson (AI)"><li className="wd-content-item">Assistant-generated sample lesson</li></Lesson></Module>
        {extra.map((name, i) => <Module key={i} title={name}><Lesson title="New lesson"><li className="wd-content-item">New module ready for course content</li></Lesson></Module>)}
      </ul>
    </div>
    </ModuleState.Provider>
  );
}
