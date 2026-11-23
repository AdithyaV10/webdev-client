"use client";
import Link from "next/link";
import { Field, inputClass } from "../../UI";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";
import * as client from "../client";
import { errorMessage } from "../../http";
export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const signin = async () => {
    setError(""); setPending(true);
    try { setCurrentUser(await client.signin(credentials)); router.push("/dashboard"); }
    catch (error) { setError(errorMessage(error)); }
    finally { setPending(false); }
  };
  return <div id="wd-signin-screen" className="max-w-[420px]">
    <h3 className="mb-5 text-2xl font-medium">Sign in</h3>
    {error && <p role="alert" className="text-red-600">{error}</p>}
    <Field id="wd-signin-username" label="Username"><input id="wd-signin-username" placeholder="username" className={`wd-username ${inputClass}`} value={credentials.username} onChange={e => setCredentials({ ...credentials, username: e.target.value })} autoComplete="username" /></Field>
    <Field id="wd-signin-password" label="Password"><input id="wd-signin-password" placeholder="password" type="password" className={`wd-password ${inputClass}`} value={credentials.password} onChange={e => setCredentials({ ...credentials, password: e.target.value })} autoComplete="current-password" /></Field>
    <Field id="wd-ai-signin-note" label="Sample note (AI)"><input id="wd-ai-signin-note" placeholder="sample note" className={inputClass} /></Field>
    <button type="button" disabled={pending} onClick={signin} id="wd-signin-btn" className="mb-3 block w-full rounded border-0 bg-blue-600 px-4 py-2 text-center text-white no-underline hover:bg-blue-700">Sign in</button>
    <Link href="/account/signup" id="wd-signup-link" className="text-blue-600">Sign up</Link>
  </div>;
}
