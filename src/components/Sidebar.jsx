import Button from "./Button";

export default function Sidebar({
  addNewProject,
  projects,
  selectProject,
  selectedProject,
}) {
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
          let classes =
            " w-full text-left rounded-sm  px-3 py-2 hover:bg-stone-500 hover:text-stone-50";

          if (project.id === selectedProject) {
            classes += " bg-stone-800 text-stone-200";
          } else {
            classes += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => selectProject(project.id)}
                className={classes}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
