import Youtubeform from "@/components/youtubeform";
import Zodform from "@/components/zodform";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>API development </h1>
      <Youtubeform />
      <h1 className="text-red-400">
        Below form is prepared by including Zod Library into React hook form
      </h1>
      <Zodform />
    </div>
  );
}
