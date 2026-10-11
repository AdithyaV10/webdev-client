import Image from "next/image";
import photo from "@/public/images/teslabot.jpg";

export default function TailwindFilters() {
  return (
    <div id="wd-tailwind-filters">
      <h2 className="text-2xl font-bold">Blurs</h2>
      <div className="flex">
        {['blur-none', 'blur-sm', 'blur-lg', 'blur-2xl'].map((effect) => (
          <Image key={effect} className={`${effect} w-1/4 h-auto`} src={photo} alt={`Tesla robot: ${effect}`} />
        ))}
      </div>
      <h3 className="mt-6 text-lg font-bold">On your own: contrast</h3>
      <div id="wd-your-filters" className="flex">
        {['contrast-0', 'contrast-50', 'contrast-100', 'contrast-200'].map((effect) => (
          <Image key={effect} className={`${effect} w-1/4 h-auto`} src={photo} alt={`Tesla robot: ${effect}`} />
        ))}
      </div>
      <p className="mt-2">On your own: compare no contrast, half contrast, normal contrast, and double contrast.</p>
      <h3 className="mt-6 text-lg font-bold">Grayscale and brightness</h3>
      <div id="wd-ai-filters" className="flex">
        {['grayscale', 'grayscale-0', 'brightness-50', 'brightness-150'].map((effect) => (
          <Image key={effect} className={`${effect} w-1/4 h-auto`} src={photo} alt={`Tesla robot: ${effect}`} />
        ))}
      </div>
      <p className="mt-2">With AI: grayscale, original colors, half brightness, and increased brightness.</p>
    </div>
  );
}
