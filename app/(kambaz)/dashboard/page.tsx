import CourseCard from "./CourseCard";
import { courses } from "../database";
import { SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="mb-4 mt-8 text-3xl font-semibold md:mt-0">
        Dashboard
      </h1>

      <hr />

      <h2 id="wd-dashboard-published" className="my-4 text-2xl font-semibold">
        Published Courses ({courses.length})
      </h2>

      <hr />

      <div id="wd-dashboard-courses" className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {courses.map(course => <CourseCard
          key={course._id}
          id={course._id}
          title={course.name}
          subtitle={course.description}
          image={course.image === "/images/nodejs.jpg" ? <SiNodedotjs className="h-28 w-28" color="#5FA04E" aria-label="Node.js logo" /> : course.image === "/images/mongodb.jpg" ? <SiMongodb className="h-28 w-28" color="#47A248" aria-label="MongoDB logo" /> : <SiReact className="h-28 w-28" color="#61DAFB" aria-label="React logo" />}
        />)}
      </div>
    </div>
  );
}
