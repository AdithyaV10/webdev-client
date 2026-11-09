import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "./todosReducer";
export default function TodoForm({ title, setTitle, editingId, setEditingId }: {
  title: string; setTitle: (title: string) => void; editingId: string | null; setEditingId: (id: string | null) => void;
}) {
  const dispatch = useDispatch();
  return <form className="mb-2 flex flex-wrap gap-2" onSubmit={e => {
    e.preventDefault();
    if (!title.trim()) return;
    if (editingId) dispatch(updateTodo({ id: editingId, title })); else dispatch(addTodo(title));
    setEditingId(null);
    setTitle("Learn Mongo");
  }}>
    <input id="wd-redux-todo-title" aria-label="Redux todo title" value={title} onChange={e => setTitle(e.target.value)} className="rounded border border-neutral-300 px-2 py-1" />
    <button type="submit" id="wd-redux-add-todo" className="rounded bg-green-600 px-3 py-1.5 text-sm text-white">{editingId ? "Update" : "Add"}</button>
  </form>;
}
