import Button from "./Button";

export default function Sidebar({ addNewProject, projects }) {
  return (
    <aside className="bg-stone-900 text-stone-50 rounded-r-md py-6 px-8 w-1/3 md:w-72">
      <h2 className="font-bold uppercase text-stone-200 md:text-xl mb-8">
        Your projects
      </h2>
      <div>
        <Button onClick={addNewProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <button className="bg-stone-700 w-full text-left rounded-sm text-stone-300 px-3 py-2 hover:bg-stone-500 hover:text-stone-50">
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
