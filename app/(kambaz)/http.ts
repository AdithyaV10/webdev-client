import axios from "axios";
export const http = axios.create({ baseURL: `${process.env.NEXT_PUBLIC_HTTP_SERVER}/api`, withCredentials: true });
http.interceptors.request.use(config => {
  if (!process.env.NEXT_PUBLIC_HTTP_SERVER) throw new Error("NEXT_PUBLIC_HTTP_SERVER is not configured");
  return config;
});
export function errorMessage(error: unknown) {
  if (axios.isAxiosError(error)) return error.response?.data?.message || "Unable to reach the server. Try again.";
  return error instanceof Error ? error.message : "Request failed";
}
