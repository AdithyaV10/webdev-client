import { useDispatch } from "react-redux";
import { deleteTodo, type ReduxTodo } from "./todosReducer";
export default function TodoItem({ todo, onEdit, onDelete }: { todo: ReduxTodo; onEdit: () => void; onDelete: () => void }) {
  const dispatch = useDispatch();
  return <li className="mb-1 flex flex-wrap items-center justify-between gap-2 rounded border border-neutral-200 px-3 py-1">
    <span>{todo.title}</span><span className="flex gap-2"><button type="button" className="rounded bg-yellow-400 px-2 py-0.5 text-sm" onClick={onEdit}>Edit</button><button type="button" className="rounded bg-red-600 px-2 py-0.5 text-sm text-white" onClick={() => { dispatch(deleteTodo(todo.id)); onDelete(); }}>Delete</button></span>
  </li>;
}
