import ProfileForm from "../profile/ProfileForm";
import ContextProfileForm from "../context/ContextProfileForm";
import ZustandProfileForm from "../zustand/ZustandProfileForm";
export default function ProfileFormPage() {
  return <div className="flex flex-col gap-8"><h2>Profile Forms</h2><ProfileForm /><ContextProfileForm /><ZustandProfileForm /></div>;
}
