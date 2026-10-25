import { FaUserCircle } from "react-icons/fa";
import { users, enrollments } from "../../../../database";

export default async function People({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const people = users.filter(user => enrollments.some(enrollment => enrollment.course === cid && enrollment.user === user._id));
  return <div><h2 className="mb-4 text-2xl font-semibold">People</h2>
    <div id="wd-people-table" className="max-w-full overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="sr-only">Course roster</caption>
        <thead><tr className="border-b border-neutral-300">{["Name", "Login ID", "Section", "Role", "Last Activity", "Total Activity"].map(label => <th key={label} scope="col" className="p-2">{label}</th>)}</tr></thead>
        <tbody>{people.map(user => <tr key={user._id} className="odd:bg-neutral-50"><td className="whitespace-nowrap p-2"><FaUserCircle className="me-2 inline text-4xl text-neutral-500" aria-hidden="true" />{user.firstName} {user.lastName}</td>{[user.loginId, user.section, user.role, user.lastActivity, user.totalActivity].map((value, i) => <td key={i} className="whitespace-nowrap p-2">{value}</td>)}</tr>)}</tbody>
      </table>
    </div>
  </div>;
}
