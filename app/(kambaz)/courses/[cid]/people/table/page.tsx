import { FaUserCircle } from "react-icons/fa";
const people = [
  ["Tony Stark", "001234561S", "S101", "STUDENT", "2020-10-01", "10:21:32"],
  ["Bruce Wayne", "001234562S", "S101", "STUDENT", "2020-11-02", "23:32:23"],
  ["Steve Rogers", "001234563S", "S101", "STUDENT", "2020-10-02", "13:21:32"],
  ["Natasha Romanoff", "001234564S", "S101", "TA", "2020-11-05", "11:22:33"],
  ["Adithya Varadarajan", "av10", "S101", "STUDENT", "2026-10-11", "02:15:00"],
  ["Grace Hopper", "gh01", "S101", "FACULTY", "2026-10-10", "03:20:00"],
  ["Alan Turing", "at01", "S101", "TA", "2026-10-09", "01:30:00"],
  ["Jane Sample (AI)", "sample01", "S101", "STUDENT", "2026-10-08", "00:45:00"],
  ["Alex Sample (AI)", "sample02", "S101", "STUDENT", "2026-10-08", "00:30:00"],
  ["Sam Sample (AI)", "sample03", "S101", "STUDENT", "2026-10-08", "00:20:00"],
];
export default function People() {
  return <div><h2 className="mb-4 text-2xl font-semibold">People</h2>
    <div id="wd-people-table" className="max-w-full overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="sr-only">Course roster</caption>
        <thead><tr className="border-b border-neutral-300">{["Name", "Login ID", "Section", "Role", "Last Activity", "Total Activity"].map(label => <th key={label} scope="col" className="p-2">{label}</th>)}</tr></thead>
        <tbody>{people.map(([name, ...values]) => <tr key={name} className="odd:bg-neutral-50"><td className="whitespace-nowrap p-2"><FaUserCircle className="me-2 inline text-4xl text-neutral-500" aria-hidden="true" />{name}</td>{values.map((value, i) => <td key={i} className="whitespace-nowrap p-2">{value}</td>)}</tr>)}</tbody>
      </table>
    </div>
  </div>;
}
