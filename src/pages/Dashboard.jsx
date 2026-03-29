import { useState } from "react";
import Navbar from "../components/Navbar";
import DashboardStats from "../components/DashboardStats";
import ProjectTable from "../components/ProjectTable";
import TaskForm from "../components/TaskForm";
import Filter from "../components/Filter";
import data from "../data/projects.json";

function Dashboard() {
  const [projects, setProjects] = useState(data);
  const [filter, setFilter] = useState("All");

  const addProject = (name) => {
    const newProject = {
      id: Date.now(),
      name,
      status: "Pending",
    };
    setProjects([...projects, newProject]);
  };

  const updateStatus = (id, status) => {
    const updated = projects.map((p) =>
      p.id === id ? { ...p, status } : p
    );
    setProjects(updated);
  };

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.status === filter);

  return (
    <div className="container mt-4">
      <Navbar />
      <DashboardStats projects={projects} />
      <Filter setFilter={setFilter} />
      <TaskForm addProject={addProject} />
      <ProjectTable
        projects={filteredProjects}
        updateStatus={updateStatus}
      />
    </div>
  );
}

export default Dashboard;