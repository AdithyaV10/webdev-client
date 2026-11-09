"use client";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

import { useCoursesStore, type Course } from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";

export default function CourseCard({ course, onEdit, image }: { course: Course; onEdit: () => void; image: string | ReactNode }) {
  const { _id: id, name: title, description: subtitle } = course;
  const deleteCourse = useCoursesStore(state => state.deleteCourse);
  const { enrollments, enroll, unenroll } = useEnrollmentsStore();
  const { currentUser } = useAccountContext();
  const enrolled = !!currentUser && enrollments.some(e => e.user === currentUser._id && e.course === id);
  return (
    <div className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <Link
        href={`/courses/${id}/home`}
        onClick={event => { if (currentUser && !enrolled) event.preventDefault(); }}
        className="wd-dashboard-course-link block text-neutral-900 no-underline"
      >
        {typeof image === "string" ? <Image
          src={image}
          width={300}
          height={160}
          className="h-40 w-full object-cover"
          alt={title}
        /> : <div className="mb-1.5 flex h-40 w-full items-center justify-center bg-white">{image}</div>}

        <div className="p-4">
          <h5 className="m-0 mb-2 truncate text-lg font-semibold">{title}</h5>
          <p className="wd-dashboard-course-title m-0 mb-3 h-[100px] overflow-hidden text-sm text-neutral-600">
            {subtitle}
          </p>

          <span className="inline-flex items-center justify-center rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">
            Go
          </span>
        </div>
      </Link>
      <div className="flex flex-wrap gap-2 px-4 pb-4">
        <button type="button" id={"wd-edit-course-" + id + "-click"} data-action="edit-course" className="rounded bg-yellow-400 px-3 py-1.5 text-sm" onClick={onEdit}>Edit</button>
        <button type="button" id={"wd-delete-course-" + id + "-click"} data-action="delete-course" className="rounded bg-red-600 px-3 py-1.5 text-sm text-white" onClick={() => deleteCourse(id)}>Delete</button>
        {currentUser && <button type="button" className={"rounded px-3 py-1.5 text-sm text-white " + (enrolled ? "bg-red-600" : "bg-green-600")} onClick={() => enrolled ? unenroll(currentUser._id, id) : enroll(currentUser._id, id)}>{enrolled ? "Unenroll" : "Enroll"}</button>}
      </div>
    </div>
  );
}
