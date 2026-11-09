"use client";
import Link from "next/link";
import { Field, inputClass } from "../../UI";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { emptyUser, useAccountContext } from "../AccountContext";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");
  const { createUser, setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signup = () => {
    if (!username.trim() || !password || (verify && verify !== password)) return;
    const user = createUser({ ...emptyUser, username, password });
    setCurrentUser(user);
    router.push("/account/profile");
  };
  return <div id="wd-signup-screen" className="max-w-[420px]">
    <h3 className="mb-5 text-2xl font-medium">Sign up</h3>
    <Field id="wd-signup-username" label="Username"><input id="wd-signup-username" placeholder="username" className={`wd-username ${inputClass}`} value={username} onChange={e => setUsername(e.target.value)} autoComplete="username" /></Field>
    <Field id="wd-signup-password" label="Password"><input id="wd-signup-password" placeholder="password" type="password" className={`wd-password ${inputClass}`} value={password} onChange={e => setPassword(e.target.value)} autoComplete="new-password" /></Field>
    <Field id="wd-signup-verify" label="Verify password"><input value={verify} onChange={e => setVerify(e.target.value)} id="wd-signup-verify" placeholder="verify password" type="password" className={`wd-password-verify ${inputClass}`} autoComplete="new-password" /></Field>
    <button type="button" id="wd-signup-btn" onClick={signup} className="mb-3 block w-full rounded border-0 bg-blue-600 px-4 py-2 text-center text-white no-underline hover:bg-blue-700">Sign up</button>
    <Link href="/account/signin" className="text-blue-600">Sign in</Link>
  </div>;
}
