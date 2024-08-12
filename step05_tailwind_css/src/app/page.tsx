import Image from "next/image";


export default function Home() {
  return (
    <main>
      <h1>External Styling</h1>
    <div className="text-blue-500 m-11 font-medium">
      <h5 bg-blue-500>Primary Color</h5>
      Tailwind Styling
      {/* Styling will not be applied if the directory is not
      added in content in tailwind.config.ts*/}
    </div>
    </main>
  );
}
