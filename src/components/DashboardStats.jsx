function DashboardStats({ projects }) {
  const total = projects.length;
  const completed = projects.filter(p => p.status === "Completed").length;
  const pending = projects.filter(p => p.status === "Pending").length;

  return (
    <div className="mb-3">
      <h5>Total: {total}</h5>
      <h5>Completed: {completed}</h5>
      <h5>Pending: {pending}</h5>
    </div>
  );
}

export default DashboardStats;