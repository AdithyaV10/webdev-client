import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { BsGithub } from "react-icons/bs";
import { TiHeartOutline } from "react-icons/ti";
import { MdSchool } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount title="Account" />
        <AiOutlineDashboard title="Dashboard" />
        <FaBookBible title="Book" />
        <FaCalendar title="Calendar" />
        <FaEnvelopeOpenText title="Open envelope" />
        <FaRegClock title="Clock" />
      </div>
      <h3>On your own: Bootstrap and Typicons</h3>
      <div id="wd-your-react-icons" className="flex gap-3">
        <BsGithub title="GitHub (Bootstrap Icons)" className="text-4xl text-green-600" />
        <TiHeartOutline title="Heart (Typicons)" className="text-4xl text-red-600" />
      </div>
      <h3>With AI: Material Design and Heroicons 2</h3>
      <div id="wd-ai-react-icons" className="flex gap-3">
        <MdSchool title="School (Material Design)" className="text-4xl text-blue-600" />
        <HiAcademicCap title="Academic cap (Heroicons 2)" className="text-4xl text-blue-600" />
      </div>
    </div>
  );
}
