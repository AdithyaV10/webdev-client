"use client";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { emptyUser, useAccountContext, type User } from "../../../../account/AccountContext";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";
import { inputClass, secondaryButton } from "../../../../UI";
export default function PeopleTable({ cid }: { cid: string }) {
  const { users, createUser, updateUser, deleteUser } = useAccountContext();
  const { enrollments, enroll } = useEnrollmentsStore();
  const [user, setUser] = useState<User>({ ...emptyUser });
  const people = users.filter(person => enrollments.some(enrollment => enrollment.course === cid && enrollment.user === person._id));
  return <div><h2 className="mb-4 text-2xl font-semibold">People</h2>
    <div className="mb-3 flex flex-wrap items-center gap-2">
      <input id="wd-user-first-name" aria-label="First name" placeholder="First name" className={inputClass + " sm:max-w-[200px]"} value={user.firstName} onChange={e => setUser({ ...user, firstName: e.target.value })} />
      <input id="wd-user-last-name" aria-label="Last name" placeholder="Last name" className={inputClass + " sm:max-w-[200px]"} value={user.lastName} onChange={e => setUser({ ...user, lastName: e.target.value })} />
      <button id="wd-add-user-click" type="button" className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white" onClick={() => {
        if (!user.firstName.trim() || !user.lastName.trim()) return;
        const created = createUser(user);
        enroll(created._id, cid);
        setUser({ ...emptyUser });
      }}>Add</button>
      <button id="wd-update-user-click" type="button" className={secondaryButton} onClick={() => { if (!user._id) return; updateUser(user); setUser({ ...emptyUser }); }}>Update</button>
    </div>
    <div id="wd-people-table" className="max-w-full overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="sr-only">Course roster</caption>
        <thead><tr className="border-b border-neutral-300">{["Name", "Login ID", "Section", "Role", "Last Activity", "Total Activity", "Actions"].map(label => <th key={label} scope="col" className="p-2">{label}</th>)}</tr></thead>
        <tbody>{people.map(person => <tr key={person._id} className="odd:bg-neutral-50"><td className="whitespace-nowrap p-2"><FaUserCircle className="me-2 inline text-4xl text-neutral-500" aria-hidden="true" />{person.firstName} {person.lastName}</td>{[person.loginId, person.section, person.role, person.lastActivity, person.totalActivity].map((value, i) => <td key={i} className="whitespace-nowrap p-2">{value}</td>)}<td className="whitespace-nowrap p-2"><button type="button" className="rounded bg-yellow-400 px-2 py-1 text-xs" onClick={() => setUser({ ...person })}>Edit</button><button type="button" className="ms-2 rounded bg-red-600 px-2 py-1 text-xs text-white" onClick={() => { deleteUser(person._id); if (user._id === person._id) setUser({ ...emptyUser }); }}>Delete</button></td></tr>)}</tbody>
      </table>
    </div>
  </div>;
}
