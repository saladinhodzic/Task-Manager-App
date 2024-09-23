import image from "../assets/no-projects.png";
import Button from "./Button";
export default function Home({ addNewProject }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img src={image} className="w-36" />
      <p>Select a project or starting building a new one.</p>
      <Button onClick={addNewProject}>Add new project</Button>
    </div>
  );
}
