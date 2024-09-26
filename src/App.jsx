import { useState } from "react";
import Home from "./components/Home";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";

function App() {
  const [myProjects, setMyProjects] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function addNewProject() {
    setMyProjects((prev) => {
      return {
        ...prev,
        selectedProject: null,
      };
    });
  }

  function cancelProject() {
    setMyProjects((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
      };
    });
  }

  function finishProject(addedProject) {
    const newProject = { ...addedProject, id: Math.random() };
    setMyProjects((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }

  console.log(myProjects);

  let content;

  if (myProjects.selectedProject === undefined) {
    content = <Home addNewProject={addNewProject} />;
  } else if (myProjects.selectedProject === null) {
    content = (
      <NewProject finishProject={finishProject} onCancel={cancelProject} />
    );
  }
  return (
    <main className=" h-screen my-8 flex gap-8">
      <Sidebar projects={myProjects.projects} addNewProject={addNewProject} />
      {content}
    </main>
  );
}

export default App;
