"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";
import { Field, inputClass, secondaryButton } from "../../UI";
import * as client from "../client";
import { errorMessage } from "../../http";
export default function Profile() {
  const { currentUser, setCurrentUser, updateUser } = useAccountContext();
  const [profile, setProfile] = useState<User | null>(null);
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const save = async () => {
    if (!profile) return;
    setError(""); setPending(true);
    try { await updateUser(profile); }
    catch (error) { setError(errorMessage(error)); }
    finally { setPending(false); }
  };
  const signout = async () => {
    setError(""); setPending(true);
    try { await client.signout(); setCurrentUser(null); router.push("/account/signin"); }
    catch (error) { setError(errorMessage(error)); }
    finally { setPending(false); }
  };
  useEffect(() => {
    if (!currentUser) { router.replace("/account/signin"); return; }
    const frame = requestAnimationFrame(() => setProfile({ ...currentUser }));
    return () => cancelAnimationFrame(frame);
  }, [currentUser, router]);
  if (!currentUser || !profile) return null;
  return <div id="wd-profile-screen" className="max-w-[520px]">
    <h3 className="mb-5 text-2xl font-medium">Profile</h3>
    {error && <p role="alert" className="text-red-600">{error}</p>}
    <Field id="wd-profile-username" label="Username"><input id="wd-profile-username" value={profile.username} onChange={e => setProfile({ ...profile, username: e.target.value })} placeholder="username" className={`wd-username ${inputClass}`} /></Field>
    <Field id="wd-profile-password" label="Password"><input id="wd-profile-password" value={profile.password ?? ""} onChange={e => setProfile({ ...profile, password: e.target.value })} placeholder="password" type="password" className={`wd-password ${inputClass}`} /></Field>
    <Field id="wd-firstname" label="First name"><input value={profile.firstName} onChange={e => setProfile({ ...profile, firstName: e.target.value })} placeholder="First Name" id="wd-firstname" className={inputClass} /></Field>
    <Field id="wd-lastname" label="Last name"><input value={profile.lastName} onChange={e => setProfile({ ...profile, lastName: e.target.value })} placeholder="Last Name" id="wd-lastname" className={inputClass} /></Field>
    <Field id="wd-dob" label="Date of birth"><input value={profile.dob ?? ""} onChange={e => setProfile({ ...profile, dob: e.target.value })} type="date" id="wd-dob" className={inputClass} /></Field>
    <Field id="wd-email" label="Email"><input value={profile.email} onChange={e => setProfile({ ...profile, email: e.target.value })} type="email" id="wd-email" className={inputClass} /></Field>
    <Field id="wd-role" label="Role"><select value={profile.role} onChange={e => setProfile({ ...profile, role: e.target.value })} id="wd-role" className={inputClass}>
      <option value="TA">Teaching assistant</option><option value="USER">User</option><option value="ADMIN">Admin</option><option value="FACULTY">Faculty</option><option value="STUDENT">Student</option>
    </select></Field>
    <div className="flex gap-2"><button type="button" id="wd-update-profile" className={secondaryButton} disabled={pending} onClick={save}>Update</button><button type="button" id="wd-signout-btn" className={secondaryButton} disabled={pending} onClick={signout}>Sign out</button></div>
  </div>;
}
