"use client";
import { useState } from "react";
import { Field, inputClass, primaryButton } from "../UI";
export default function Inbox() {
  const [drafts, setDrafts] = useState<{ recipient: string; subject: string; message: string }[]>([]);
  return <section id="wd-inbox" className="mt-8 max-w-3xl md:mt-0">
    <h1 className="text-3xl font-medium">Inbox</h1>
    <p className="text-neutral-600">Compose course message drafts. Drafts remain in this session; this prototype does not send messages.</p>
    <form onSubmit={(event) => { event.preventDefault(); const data = new FormData(event.currentTarget); setDrafts([...drafts, { recipient: String(data.get("recipient")), subject: String(data.get("subject")), message: String(data.get("message")) }]); event.currentTarget.reset(); }}>
      <Field id="wd-message-recipient" label="To"><input id="wd-message-recipient" name="recipient" required className={inputClass} placeholder="Course member" /></Field>
      <Field id="wd-message-subject" label="Subject"><input id="wd-message-subject" name="subject" required className={inputClass} /></Field>
      <Field id="wd-message-body" label="Message"><textarea id="wd-message-body" name="message" required rows={5} className={inputClass} /></Field>
      <button type="submit" className={primaryButton}>Save draft</button>
    </form>
    <h2 className="mt-6 text-xl">Saved drafts</h2>
    {drafts.length === 0 && <p>No saved drafts.</p>}
    {drafts.map((draft, index) => <article key={index} className="mb-3 rounded border border-neutral-300 p-3"><h3 className="m-0 text-lg">{draft.subject}</h3><p className="text-sm">To: {draft.recipient}</p><p className="whitespace-pre-wrap">{draft.message}</p><button type="button" className="text-red-700 underline" onClick={() => setDrafts(drafts.filter((_, draftIndex) => draftIndex !== index))}>Discard draft</button></article>)}
  </section>;
}
