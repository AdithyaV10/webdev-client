"use client";

import { useState } from "react";

export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [nickName, setNickName] = useState("JD");
  return (
    <div id="wd-string-state-variables">
      <h2>String State Variables</h2>
      <p>{firstName} {lastName}</p><p>{nickName}</p>
      <input
        className="w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        id="wd-first-name"
      />
      <input aria-label="Last name" id="wd-last-name" value={lastName} onChange={e => setLastName(e.target.value)} />
      <input aria-label="Nickname" id="wd-nick-name" value={nickName} onChange={e => setNickName(e.target.value)} />
      <hr />
    </div>
  );
}
