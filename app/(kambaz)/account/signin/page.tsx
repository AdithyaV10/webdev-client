import Link from "next/link";
import { Field, inputClass } from "../../UI";
export default function Signin() {
  return <div id="wd-signin-screen" className="max-w-[420px]">
    <h3 className="mb-5 text-2xl font-medium">Sign in</h3>
    <Field id="wd-signin-username" label="Username"><input id="wd-signin-username" placeholder="username" className={`wd-username ${inputClass}`} defaultValue="ada" autoComplete="username" /></Field>
    <Field id="wd-signin-password" label="Password"><input id="wd-signin-password" placeholder="password" type="password" className={`wd-password ${inputClass}`} defaultValue="123" autoComplete="current-password" /></Field>
    <Field id="wd-ai-signin-note" label="Sample note (AI)"><input id="wd-ai-signin-note" placeholder="sample note" className={inputClass} /></Field>
    <Link href="/dashboard" id="wd-signin-btn" className="mb-3 block rounded bg-blue-600 px-4 py-2 text-center text-white no-underline hover:bg-blue-700">Sign in</Link>
    <Link href="/account/signup" id="wd-signup-link" className="text-blue-600">Sign up</Link>
  </div>;
}
