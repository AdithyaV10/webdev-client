import axios from "axios";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const api = axios.create({ baseURL: HTTP_SERVER });
api.interceptors.request.use(config => {
  if (!HTTP_SERVER) throw new Error("NEXT_PUBLIC_HTTP_SERVER is not configured");
  return config;
});
export type Assignment = { id: number; title: string; description: string; due: string; completed: boolean; score: number };
export type Todo = { id: number; title: string; completed: boolean; description?: string; editing?: boolean };
export function errorMessage(error: unknown) {
  if (axios.isAxiosError(error)) return error.response?.data?.message || "Unable to reach the server. Try again.";
  return error instanceof Error ? error.message : "Request failed";
}
export const fetchWelcomeMessage = async (): Promise<string> => (await api.get("/lab5/welcome")).data;
export const fetchAssignment = async (): Promise<Assignment> => (await api.get("/lab5/assignment")).data;
export const updateTitle = async (title: string): Promise<Assignment> => (await api.get(`/lab5/assignment/title/${encodeURIComponent(title)}`)).data;
export const fetchTodosWithPromise = (): Promise<Todo[]> => api.get<Todo[]>("/lab5/todos").then(response => response.data);
export const fetchTodos = async (): Promise<Todo[]> => (await api.get("/lab5/todos")).data;
export const createNewTodo = async (): Promise<Todo[]> => (await api.get("/lab5/todos/create")).data;
export const removeTodo = async (todo: Todo): Promise<Todo[]> => (await api.get(`/lab5/todos/${todo.id}/delete`)).data;
export const postNewTodo = async (todo: Omit<Todo, "id">): Promise<Todo> => (await api.post("/lab5/todos", todo)).data;
export const deleteTodo = async (todo: Todo) => { await api.delete(`/lab5/todos/${todo.id}`); };
export const updateTodo = async (todo: Todo) => { await api.put(`/lab5/todos/${todo.id}`, todo); };
export const fetchHello = async (): Promise<{ message: string }> => {
  const response = await fetch("/api/lab5/hello");
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
};
export const calculate = async (a: string, b: string, operation: string): Promise<{ a: number; b: number; operation: string; result: number }> => {
  const response = await fetch(`/api/lab5/calculator?${new URLSearchParams({ a, b, operation })}`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
  return data;
};
