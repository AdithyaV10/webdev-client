"use client";
import { useEffect, useState, type ReactNode } from "react";
import axios from "axios";
import { useAccountContext } from "./AccountContext";
import * as client from "./client";
import { errorMessage } from "../http";
export default function Session({ children }: { children: ReactNode }) {
  const { setCurrentUser } = useAccountContext();
  const [pending, setPending] = useState(true);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    client.profile().then(user => { if (active) setCurrentUser(user); }).catch(error => {
      if (!active) return;
      setCurrentUser(null);
      if (!axios.isAxiosError(error) || error.response?.status !== 401) setError(errorMessage(error));
    }).finally(() => { if (active) setPending(false); });
    return () => { active = false; };
  }, [setCurrentUser, attempt]);
  if (pending) return <p role="status">Loading account...</p>;
  if (error) return <div role="alert">{error} <button type="button" onClick={() => { setError(""); setPending(true); setAttempt(attempt + 1); }}>Retry</button></div>;
  return children;
}
