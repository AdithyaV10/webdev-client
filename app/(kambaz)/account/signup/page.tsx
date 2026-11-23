"use client";
import Link from "next/link";
import { Field, inputClass } from "../../UI";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { emptyUser, useAccountContext } from "../AccountContext";
import * as client from "../client";
import { errorMessage } from "../../http";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const signup = async () => {
    if (!username.trim() || !password || verify !== password) { setError("Enter a username and matching passwords"); return; }
    setError(""); setPending(true);
    try { setCurrentUser(await client.signup({ ...emptyUser, username, password })); router.push("/account/profile"); }
    catch (error) { setError(errorMessage(error)); }
    finally { setPending(false); }
  };
  return <div id="wd-signup-screen" className="max-w-[420px]">
    <h3 className="mb-5 text-2xl font-medium">Sign up</h3>
    {error && <p role="alert" className="text-red-600">{error}</p>}
    <Field id="wd-signup-username" label="Username"><input id="wd-signup-username" placeholder="username" className={`wd-username ${inputClass}`} value={username} onChange={e => setUsername(e.target.value)} autoComplete="username" /></Field>
    <Field id="wd-signup-password" label="Password"><input id="wd-signup-password" placeholder="password" type="password" className={`wd-password ${inputClass}`} value={password} onChange={e => setPassword(e.target.value)} autoComplete="new-password" /></Field>
    <Field id="wd-signup-verify" label="Verify password"><input value={verify} onChange={e => setVerify(e.target.value)} id="wd-signup-verify" placeholder="verify password" type="password" className={`wd-password-verify ${inputClass}`} autoComplete="new-password" /></Field>
    <button type="button" id="wd-signup-btn" disabled={pending} onClick={signup} className="mb-3 block w-full rounded border-0 bg-blue-600 px-4 py-2 text-center text-white no-underline hover:bg-blue-700">Sign up</button>
    <Link href="/account/signin" className="text-blue-600">Sign in</Link>
  </div>;
}
