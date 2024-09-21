import image from "../assets/no-projects.png";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img src={image} className="w-36" />
      <p>Select a project or starting building a new one.</p>
      <button className="bg-stone-800 text-white rounded-md px-3 py-2">
        Create new project
      </button>
    </div>
  );
}
