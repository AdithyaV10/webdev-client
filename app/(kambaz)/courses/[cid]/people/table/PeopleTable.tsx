"use client";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { emptyUser, useAccountContext, type User } from "../../../../account/AccountContext";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";
import { inputClass, secondaryButton } from "../../../../UI";
import { errorMessage } from "../../../../http";
export default function PeopleTable({ cid }: { cid: string }) {
  const { users, loadUsers, createUser, updateUser, deleteUser } = useAccountContext();
  const { enrollments, enroll, loadEnrollments } = useEnrollmentsStore();
  const [user, setUser] = useState<User>({ ...emptyUser });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(true);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    Promise.all([loadUsers(), loadEnrollments()]).then(() => { if (active) setError(""); })
      .catch(error => { if (active) setError(errorMessage(error)); })
      .finally(() => { if (active) setPending(false); });
    return () => { active = false; };
  }, [cid, attempt, loadEnrollments, loadUsers]);
  const mutate = async (action: () => Promise<void>) => {
    setError(""); setPending(true);
    try { await action(); setUser({ ...emptyUser }); }
    catch (error) { setError(errorMessage(error)); }
    finally { setPending(false); }
  };
  const people = users.filter(person => enrollments.some(enrollment => enrollment.course === cid && enrollment.user === person._id));
  return <div><h2 className="mb-4 text-2xl font-semibold">People</h2>
    {pending && <p role="status">Loading people...</p>}
    {error && <p role="alert" className="text-red-600">{error} <button type="button" onClick={() => { setPending(true); setAttempt(value => value + 1); }}>Retry</button></p>}
    <div className="mb-3 flex flex-wrap items-center gap-2">
      <input id="wd-user-first-name" aria-label="First name" placeholder="First name" className={inputClass + " sm:max-w-[200px]"} value={user.firstName} onChange={e => setUser({ ...user, firstName: e.target.value })} />
      <input id="wd-user-last-name" aria-label="Last name" placeholder="Last name" className={inputClass + " sm:max-w-[200px]"} value={user.lastName} onChange={e => setUser({ ...user, lastName: e.target.value })} />
      <button id="wd-add-user-click" type="button" className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white" disabled={pending} onClick={() => { if (!user.firstName.trim() || !user.lastName.trim()) return; void mutate(async () => { const created = await createUser(user); await enroll(created._id, cid); }); }}>Add</button>
      <button id="wd-update-user-click" type="button" className={secondaryButton} disabled={pending} onClick={() => { if (user._id) void mutate(() => updateUser(user)); }}>Update</button>
    </div>
    <div id="wd-people-table" className="max-w-full overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="sr-only">Course roster</caption>
        <thead><tr className="border-b border-neutral-300">{["Name", "Login ID", "Section", "Role", "Last Activity", "Total Activity", "Actions"].map(label => <th key={label} scope="col" className="p-2">{label}</th>)}</tr></thead>
        <tbody>{people.map(person => <tr key={person._id} className="odd:bg-neutral-50"><td className="whitespace-nowrap p-2"><FaUserCircle className="me-2 inline text-4xl text-neutral-500" aria-hidden="true" />{person.firstName} {person.lastName}</td>{[person.loginId, person.section, person.role, person.lastActivity, person.totalActivity].map((value, i) => <td key={i} className="whitespace-nowrap p-2">{value}</td>)}<td className="whitespace-nowrap p-2"><button type="button" className="rounded bg-yellow-400 px-2 py-1 text-xs" onClick={() => setUser({ ...person })}>Edit</button><button type="button" className="ms-2 rounded bg-red-600 px-2 py-1 text-xs text-white" disabled={pending} onClick={() => mutate(() => deleteUser(person._id))}>Delete</button></td></tr>)}</tbody>
      </table>
    </div>
  </div>;
}
