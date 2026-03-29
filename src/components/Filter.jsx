function Filter({ setFilter }) {
  return (
    <div className="mb-3">
      <button onClick={() => setFilter("All")} className="btn btn-primary me-2">
        All
      </button>
      <button onClick={() => setFilter("Completed")} className="btn btn-success me-2">
        Completed
      </button>
      <button onClick={() => setFilter("Pending")} className="btn btn-warning">
        Pending
      </button>
    </div>
  );
}

export default Filter;