import React from "react";

function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">

        <div className="d-flex justify-content-between">

          <div>
            <h5 className="card-title">
              {task.title}
            </h5>

            <p className="card-text text-muted">
              {task.description}
            </p>
          </div>

          <span
            className={
              task.status === "DONE"
                ? "badge bg-success"
                : task.status === "IN_PROGRESS"
                ? "badge bg-warning text-dark"
                : "badge bg-secondary"
            }
          >
            {task.status}
          </span>

        </div>

        <div className="mt-3">

          <span className="badge bg-info text-dark me-2">
            Priority: {task.priority}
          </span>

          <span className="text-muted">
            Due Date: {task.dueDate}
          </span>

        </div>

        <div className="mt-3">

          <button
            className="btn btn-primary btn-sm me-2"
            onClick={() => onEdit(task)}
          >
            Edit
          </button>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default TaskCard;