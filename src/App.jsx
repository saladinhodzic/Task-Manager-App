import { useState } from "react";
import Home from "./components/Home";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import SelectProject from "./components/SelectProject";

function App() {
  const [myProjects, setMyProjects] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });

  const newTasks = myProjects.tasks.filter(
    (task) => task.projectId === myProjects.selectedProject
  );

  function addTask(text) {
    setMyProjects((prev) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        taskId: taskId,
        projectId: prev.selectedProject,
      };
      return {
        ...prev,
        tasks: [newTask, ...prev.tasks],
      };
    });
  }

  function deleteTask(id) {
    setMyProjects((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function addNewProject() {
    setMyProjects((prev) => {
      return {
        ...prev,
        selectedProject: null,
      };
    });
  }

  function selectProject(id) {
    setMyProjects((prev) => {
      return {
        ...prev,
        selectedProject: id,
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
    setMyProjects((prev) => {
      const newProject = { ...addedProject, id: Math.random() };
      return {
        ...prev,
        selectedProject: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }

  function handleDelete() {
    setMyProjects((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedProject
        ),
      };
    });
  }

  const selectedProject = myProjects.projects.find(
    (value) => value.id === myProjects.selectedProject
  );

  let content = (
    <SelectProject
      tasks={newTasks}
      deleteTask={deleteTask}
      addTask={addTask}
      project={selectedProject}
      onDelete={handleDelete}
    />
  );

  if (myProjects.selectedProject === undefined) {
    content = <Home addNewProject={addNewProject} />;
  } else if (myProjects.selectedProject === null) {
    content = (
      <NewProject finishProject={finishProject} onCancel={cancelProject} />
    );
  }
  return (
    <main className=" h-screen my-8 flex gap-8">
      <Sidebar
        projects={myProjects.projects}
        selectProject={selectProject}
        addNewProject={addNewProject}
        selectedProject={myProjects.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
