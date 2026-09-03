import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";

function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Project",
      description: "Complete Task Manager frontend",
      status: "IN_PROGRESS",
      priority: "HIGH",
      dueDate: "2026-07-30",
    },
    {
      id: 2,
      title: "Create Spring Boot Backend",
      description: "Develop REST APIs",
      status: "TODO",
      priority: "MEDIUM",
      dueDate: "2026-08-02",
    },
    {
      id: 3,
      title: "Connect MySQL",
      description: "Connect backend with MySQL",
      status: "DONE",
      priority: "HIGH",
      dueDate: "2026-07-25",
    },
  ]);

  // Edit task state
  const [editingTask, setEditingTask] = useState(null);

  // Form data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "TODO",
    priority: "MEDIUM",
    dueDate: "",
  });

  // EDIT BUTTON CLICK
  const handleEdit = (task) => {
    setEditingTask(task);

    setFormData({
      title: task.title,
      description: task.description,
      status: task.status,
      priority: task.priority,
      dueDate: task.dueDate,
    });
  };

  // INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // SAVE EDITED TASK
  const handleUpdate = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.dueDate
    ) {
      alert("Please fill all fields");
      return;
    }

    const updatedTasks = tasks.map((task) =>
      task.id === editingTask.id
        ? {
            ...task,
            title: formData.title,
            description: formData.description,
            status: formData.status,
            priority: formData.priority,
            dueDate: formData.dueDate,
          }
        : task
    );

    setTasks(updatedTasks);

    // Close edit form
    setEditingTask(null);

    alert("Task updated successfully!");
  };

  // DELETE TASK
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== id)
      );

      alert("Task deleted successfully!");
    }
  };

  // CANCEL EDIT
  const handleCancel = () => {
    setEditingTask(null);
  };

  return (
    <div>
      <Navbar />

      <div className="d-flex">
        <Sidebar />

        <div className="container-fluid p-4">

          {/* PAGE HEADER */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2>Tasks</h2>
              <p className="text-muted">
                Manage all your tasks
              </p>
            </div>

            <button className="btn btn-warning">
              + Add Task
            </button>
          </div>

          {/* EDIT TASK FORM */}
          {editingTask && (
            <div className="card shadow mb-4">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">
                  Edit Task
                </h5>
              </div>

              <div className="card-body">

                <form onSubmit={handleUpdate}>

                  {/* TITLE */}
                  <div className="mb-3">
                    <label className="form-label">
                      Task Title
                    </label>

                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>

                  {/* DESCRIPTION */}
                  <div className="mb-3">
                    <label className="form-label">
                      Description
                    </label>

                    <textarea
                      name="description"
                      className="form-control"
                      rows="3"
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="row">

                    {/* STATUS */}
                    <div className="col-md-4 mb-3">
                      <label className="form-label">
                        Status
                      </label>

                      <select
                        name="status"
                        className="form-select"
                        value={formData.status}
                        onChange={handleChange}
                      >
                        <option value="TODO">
                          TODO
                        </option>

                        <option value="IN_PROGRESS">
                          IN_PROGRESS
                        </option>

                        <option value="DONE">
                          DONE
                        </option>
                      </select>
                    </div>

                    {/* PRIORITY */}
                    <div className="col-md-4 mb-3">
                      <label className="form-label">
                        Priority
                      </label>

                      <select
                        name="priority"
                        className="form-select"
                        value={formData.priority}
                        onChange={handleChange}
                      >
                        <option value="LOW">
                          LOW
                        </option>

                        <option value="MEDIUM">
                          MEDIUM
                        </option>

                        <option value="HIGH">
                          HIGH
                        </option>
                      </select>
                    </div>

                    {/* DUE DATE */}
                    <div className="col-md-4 mb-3">
                      <label className="form-label">
                        Due Date
                      </label>

                      <input
                        type="date"
                        name="dueDate"
                        className="form-control"
                        value={formData.dueDate}
                        onChange={handleChange}
                      />
                    </div>

                  </div>

                  {/* BUTTONS */}
                  <div className="d-flex gap-2">

                    <button
                      type="submit"
                      className="btn btn-success"
                    >
                      Update Task
                    </button>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>

                  </div>

                </form>

              </div>
            </div>
          )}

          {/* TASK LIST */}
          {tasks.length === 0 ? (
            <div className="alert alert-info">
              No tasks available.
            </div>
          ) : (
            tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          )}

        </div>
      </div>
    </div>
  );
}

export default Tasks;

