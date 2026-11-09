"use client";

import { useState } from "react";

export default function BooleanStateVariables() {
  const [done, setDone] = useState(true);
  const [urgent, setUrgent] = useState(false);
  const [saved, setSaved] = useState(false);
  return (
    <div id="wd-boolean-state-variables">
      <h2>Boolean State Variables</h2>
      <p>{done ? "Done" : "Not done"}</p>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={done}
          onChange={() => setDone(!done)}
          id="wd-boolean-checkbox"
        />
        Done
      </label>
      {done && <div className="mt-2 rounded bg-yellow-100 p-2">Yay! Done</div>}
      <label><input type="checkbox" id="wd-boolean-urgent" checked={urgent} onChange={e => setUrgent(e.target.checked)} />Urgent</label>
      {urgent && <p>Needs attention</p>}
      <label><input type="checkbox" id="wd-boolean-saved" checked={saved} onChange={e => setSaved(e.target.checked)} />Saved</label>
      {saved && <div>Saved</div>}
      <hr />
    </div>
  );
}
