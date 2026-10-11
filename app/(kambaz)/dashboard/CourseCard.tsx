import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

export default function CourseCard({
  id,
  title,
  subtitle,
  image,
}: {
  id: string;
  title: string;
  subtitle: string;
  image: string | ReactNode;
}) {
  return (
    <div className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <Link
        href={`/courses/${id}/home`}
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
    </div>
  );
}
