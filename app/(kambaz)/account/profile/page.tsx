import Link from "next/link";
import { Field, inputClass, secondaryButton } from "../../UI";
export default function Profile() {
  return <div id="wd-profile-screen" className="max-w-[520px]">
    <h3 className="mb-5 text-2xl font-medium">Profile</h3>
    <Field id="wd-profile-username" label="Username"><input id="wd-profile-username" defaultValue="alice" placeholder="username" className={`wd-username ${inputClass}`} /></Field>
    <Field id="wd-profile-password" label="Password"><input id="wd-profile-password" defaultValue="123" placeholder="password" type="password" className={`wd-password ${inputClass}`} /></Field>
    <Field id="wd-firstname" label="First name"><input defaultValue="Alice" placeholder="First Name" id="wd-firstname" className={inputClass} /></Field>
    <Field id="wd-lastname" label="Last name"><input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className={inputClass} /></Field>
    <Field id="wd-dob" label="Date of birth"><input defaultValue="2000-01-01" type="date" id="wd-dob" className={inputClass} /></Field>
    <Field id="wd-email" label="Email"><input defaultValue="alice@wonderland" type="email" id="wd-email" className={inputClass} /></Field>
    <Field id="wd-role" label="Role"><select defaultValue="FACULTY" id="wd-role" className={inputClass}>
      <option value="USER">User</option><option value="ADMIN">Admin</option><option value="FACULTY">Faculty</option><option value="STUDENT">Student</option>
    </select></Field>
    <Link href="/account/signin" className={secondaryButton}>Sign out</Link>
  </div>;
}
