function ProjectTable({ projects, updateStatus }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>
              <span
                className={
                  p.status === "Completed"
                    ? "text-success"
                    : p.status === "In Progress"
                    ? "text-warning"
                    : "text-danger"
                }
              >
                {p.status}
              </span>
            </td>
            <td>
              <select
                onChange={(e) => updateStatus(p.id, e.target.value)}
                className="form-select"
              >
                <option>Update</option>
                <option>Completed</option>
                <option>In Progress</option>
                <option>Pending</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProjectTable;