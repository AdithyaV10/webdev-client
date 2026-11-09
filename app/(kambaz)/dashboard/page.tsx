"use client";
import CourseCard from "./CourseCard";
import { useState } from "react";
import { emptyCourse, useCoursesStore } from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";
import { Field, inputClass, secondaryButton } from "../UI";
import { SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

export default function Dashboard() {
  const { currentUser } = useAccountContext();
  const { courses, addCourse, updateCourse } = useCoursesStore();
  const { enrollments, enroll } = useEnrollmentsStore();
  const [course, setCourse] = useState({ ...emptyCourse });
  const [showAllCourses, setShowAllCourses] = useState(false);
  const visibleCourses = !currentUser || showAllCourses ? courses : courses.filter(c => enrollments.some(e => e.user === currentUser._id && e.course === c._id));
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="mb-4 mt-8 flex flex-wrap items-center justify-between gap-2 text-3xl font-semibold md:mt-0">
        Dashboard
        {currentUser && <button type="button" id="wd-enrollments-toggle" aria-pressed={showAllCourses} onClick={() => setShowAllCourses(!showAllCourses)} className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">Enrollments</button>}
      </h1>

      <hr />
      <div className="my-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="m-0 text-lg font-semibold">New Course</h2>
      </div>
      <div className="mb-4 max-w-xl">
        <Field id="wd-course-name" label="Course name"><input id="wd-course-name" value={course.name} onChange={e => setCourse({ ...course, name: e.target.value })} className={inputClass} /></Field>
        <Field id="wd-course-description" label="Description"><textarea id="wd-course-description" value={course.description} onChange={e => setCourse({ ...course, description: e.target.value })} rows={3} className={inputClass} /></Field>
        <Field id="wd-course-number" label="Course number"><input id="wd-course-number" value={course.number} onChange={e => setCourse({ ...course, number: e.target.value })} className={inputClass} /></Field>
        <Field id="wd-course-start-date" label="Start date"><input id="wd-course-start-date" type="date" value={course.startDate} onChange={e => setCourse({ ...course, startDate: e.target.value })} className={inputClass} /></Field>
        <div className="flex gap-2"><button id="wd-add-new-course-click" type="button" className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white" onClick={() => {
          if (!course.name.trim()) return;
          addCourse(course);
          const added = useCoursesStore.getState().courses.at(-1);
          if (currentUser && added) enroll(currentUser._id, added._id);
        }}>Add</button><button id="wd-update-course-click" type="button" className={secondaryButton} onClick={() => { if (course.name.trim()) updateCourse(course); }}>Update</button></div>
      </div>
      <hr />
      <h2 id="wd-dashboard-published" className="my-4 text-2xl font-semibold">
        Published Courses ({visibleCourses.length})
      </h2>

      <hr />

      <div id="wd-dashboard-courses" className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {visibleCourses.map(course => <CourseCard
          key={course._id}
          course={course}
          onEdit={() => setCourse({ ...course })}
          image={course.image === "/images/nodejs.jpg" ? <SiNodedotjs className="h-28 w-28" color="#5FA04E" aria-label="Node.js logo" /> : course.image === "/images/mongodb.jpg" ? <SiMongodb className="h-28 w-28" color="#47A248" aria-label="MongoDB logo" /> : <SiReact className="h-28 w-28" color="#61DAFB" aria-label="React logo" />}
        />)}
      </div>
    </div>
  );
}
