"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
export default function WorkingWithRemoteObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<client.Assignment | null>(null);
  const [error, setError] = useState(""), [pending, setPending] = useState(false);
  useEffect(() => {
    let active = true;
    client.fetchAssignment().then(value => { if (active) setAssignment(value); })
      .catch(error => { if (active) setError(client.errorMessage(error)); });
    return () => { active = false; };
  }, []);
  return <section id="wd-remote-objects-async"><h3>Working with Objects Asynchronously</h3>
    {error && <p role="alert" className="text-red-800">{error}</p>}
    {!assignment && !error && <p role="status">Loading assignment...</p>}
    {assignment && <><label>Assignment <input id="wd-async-assignment-title" value={assignment.title} onChange={e => setAssignment({ ...assignment, title: e.target.value })} /></label>
      <button type="button" disabled={pending} onClick={async () => {
        setError(""); setPending(true);
        try { setAssignment(await client.updateTitle(assignment.title)); } catch (error) { setError(client.errorMessage(error)); }
        finally { setPending(false); }
      }}>Update Title</button><pre>{JSON.stringify(assignment, null, 2)}</pre></>}
  </section>;
}
