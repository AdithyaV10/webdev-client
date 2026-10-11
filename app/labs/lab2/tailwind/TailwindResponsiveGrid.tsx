export default function TailwindResponsiveGrid() {
  return (
    <div id="wd-tailwind-responsive-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="text-center bg-blue-300 p-3">
          {String(i + 1).padStart(2, "0")}
        </div>
      ))}
    </div>
  );
}
