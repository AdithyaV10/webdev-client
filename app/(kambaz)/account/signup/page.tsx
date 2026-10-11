import Link from "next/link";
import { Field, inputClass } from "../../UI";
export default function Signup() {
  return <div id="wd-signup-screen" className="max-w-[420px]">
    <h3 className="mb-5 text-2xl font-medium">Sign up</h3>
    <Field id="wd-signup-username" label="Username"><input id="wd-signup-username" placeholder="username" className={`wd-username ${inputClass}`} defaultValue="ada" autoComplete="username" /></Field>
    <Field id="wd-signup-password" label="Password"><input id="wd-signup-password" placeholder="password" type="password" className={`wd-password ${inputClass}`} defaultValue="123" autoComplete="new-password" /></Field>
    <Field id="wd-signup-verify" label="Verify password"><input id="wd-signup-verify" placeholder="verify password" type="password" className={`wd-password-verify ${inputClass}`} autoComplete="new-password" /></Field>
    <Link href="/account/profile" className="mb-3 block rounded bg-blue-600 px-4 py-2 text-center text-white no-underline hover:bg-blue-700">Sign up</Link>
    <Link href="/account/signin" className="text-blue-600">Sign in</Link>
  </div>;
}
