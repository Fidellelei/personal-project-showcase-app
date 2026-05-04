import { useState } from "react";
import ProjectList from "./components/ProjectList";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Portfolio Website", description: "My personal site" },
    { id: 2, title: "Weather App", description: "Shows weather data" }
  ]);

  const [search, setSearch] = useState("");

  function addProject(project) {
    setProjects([...projects, { ...project, id: Date.now() }]);
  }

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>My Portfolio</h1>

      <SearchBar search={search} setSearch={setSearch} />
      <AddProjectForm addProject={addProject} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;