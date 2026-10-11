import type { ReactNode } from "react";
export const secondaryButton = "inline-flex items-center justify-center gap-1 rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm text-neutral-900 no-underline hover:bg-neutral-200";
export const primaryButton = "inline-flex items-center justify-center gap-1 rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white no-underline hover:bg-red-700";
export const inputClass = "w-full min-w-0 rounded border border-neutral-300 bg-white px-3 py-2 text-base text-neutral-900";
export function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return <div className="mb-4"><label htmlFor={id} className="mb-1 block font-medium">{label}</label>{children}</div>;
}
