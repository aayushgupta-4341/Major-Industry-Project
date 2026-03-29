import { useState } from "react";

function TaskForm({ addProject }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addProject(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        placeholder="Enter project name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-2"
      />
      <button className="btn btn-dark">Add Project</button>
    </form>
  );
}

export default TaskForm;