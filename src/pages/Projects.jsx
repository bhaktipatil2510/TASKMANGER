
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Projects() {

  // Projects Data
  const projects = [
    {
      id: 1,
      name: "Task Manager",
      description: "Task management application",
      status: "In Progress",
      progress: 70,
      technology: "React JS, Spring Boot, MySQL",
      startDate: "2026-07-01",
      dueDate: "2026-08-15",
      tasks: [
        "Create React frontend",
        "Create Spring Boot backend",
        "Connect MySQL database",
        "Create REST APIs",
        "Connect frontend with backend",
      ],
    },
    {
      id: 2,
      name: "E-Commerce",
      description: "Online shopping application",
      status: "In Progress",
      progress: 50,
      technology: "React JS, Java, Spring Boot, MySQL",
      startDate: "2026-06-15",
      dueDate: "2026-09-01",
      tasks: [
        "Create product page",
        "Create shopping cart",
        "Create user registration",
        "Create login system",
        "Create order management",
      ],
    },
    {
      id: 3,
      name: "Student Management",
      description: "Student management system",
      status: "Completed",
      progress: 100,
      technology: "React JS, Spring Boot, MySQL",
      startDate: "2026-05-01",
      dueDate: "2026-06-30",
      tasks: [
        "Add student",
        "Update student",
        "Delete student",
        "View student details",
        "Connect MySQL database",
      ],
    },
  ];

  // Selected Project
  const [selectedProject, setSelectedProject] = useState(null);

  // VIEW PROJECT FUNCTION
  const handleViewProject = (project) => {
    setSelectedProject(project);
  };

  // BACK TO PROJECTS
  const handleBack = () => {
    setSelectedProject(null);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f6fa",
      }}
    >

      {/* Navbar */}
      <Navbar />

      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 60px)",
        }}
      >

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            padding: "35px",
          }}
        >

          {/* ================================================= */}
          {/* PROJECT DETAILS */}
          {/* ================================================= */}

          {selectedProject ? (

            <div>

              {/* Back Button */}
              <button
                onClick={handleBack}
                style={{
                  padding: "10px 18px",
                  backgroundColor: "#ffffff",
                  color: "#ff9d00",
                  border: "1px solid #ff9d00",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  marginBottom: "25px",
                }}
              >
                ← Back to Projects
              </button>

              {/* Project Header */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ff9d00, #ff6b00)",
                  color: "#ffffff",
                  padding: "30px",
                  borderRadius: "18px",
                  marginBottom: "25px",
                  boxShadow:
                    "0 10px 30px rgba(255, 157, 0, 0.25)",
                }}
              >

                <h2
                  style={{
                    margin: "0 0 10px",
                    fontSize: "30px",
                    fontWeight: "700",
                  }}
                >
                  {selectedProject.name}
                </h2>

                <p
                  style={{
                    margin: 0,
                    fontSize: "16px",
                  }}
                >
                  {selectedProject.description}
                </p>

              </div>

              {/* Project Information */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "20px",
                  marginBottom: "25px",
                }}
              >

                {/* Status */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "20px",
                    borderRadius: "15px",
                    boxShadow:
                      "0 5px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <p
                    style={{
                      color: "#999",
                      marginBottom: "8px",
                    }}
                  >
                    Status
                  </p>

                  <h5
                    style={{
                      color:
                        selectedProject.status === "Completed"
                          ? "#28a745"
                          : "#ff9d00",
                      margin: 0,
                    }}
                  >
                    {selectedProject.status}
                  </h5>
                </div>

                {/* Technology */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "20px",
                    borderRadius: "15px",
                    boxShadow:
                      "0 5px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <p
                    style={{
                      color: "#999",
                      marginBottom: "8px",
                    }}
                  >
                    Technology
                  </p>

                  <h6
                    style={{
                      color: "#2d1b12",
                      margin: 0,
                    }}
                  >
                    {selectedProject.technology}
                  </h6>
                </div>

                {/* Start Date */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "20px",
                    borderRadius: "15px",
                    boxShadow:
                      "0 5px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <p
                    style={{
                      color: "#999",
                      marginBottom: "8px",
                    }}
                  >
                    Start Date
                  </p>

                  <h6
                    style={{
                      color: "#2d1b12",
                      margin: 0,
                    }}
                  >
                    {selectedProject.startDate}
                  </h6>
                </div>

                {/* Due Date */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "20px",
                    borderRadius: "15px",
                    boxShadow:
                      "0 5px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <p
                    style={{
                      color: "#999",
                      marginBottom: "8px",
                    }}
                  >
                    Due Date
                  </p>

                  <h6
                    style={{
                      color: "#2d1b12",
                      margin: 0,
                    }}
                  >
                    {selectedProject.dueDate}
                  </h6>
                </div>

              </div>

              {/* Progress */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow:
                    "0 5px 20px rgba(0,0,0,0.08)",
                  marginBottom: "25px",
                }}
              >

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >

                  <h5
                    style={{
                      margin: 0,
                      color: "#2d1b12",
                    }}
                  >
                    Project Progress
                  </h5>

                  <strong>
                    {selectedProject.progress}%
                  </strong>

                </div>

                <div
                  style={{
                    width: "100%",
                    height: "12px",
                    backgroundColor: "#eeeeee",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >

                  <div
                    style={{
                      width: `${selectedProject.progress}%`,
                      height: "100%",
                      background:
                        "linear-gradient(90deg, #ff9d00, #ff6b00)",
                      borderRadius: "10px",
                    }}
                  ></div>

                </div>

              </div>

              {/* Project Tasks */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow:
                    "0 5px 20px rgba(0,0,0,0.08)",
                }}
              >

                <h5
                  style={{
                    color: "#2d1b12",
                    marginBottom: "20px",
                  }}
                >
                  Project Tasks
                </h5>

                {selectedProject.tasks.map(
                  (task, index) => (

                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "15px",
                        marginBottom: "10px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "10px",
                      }}
                    >

                      <div
                        style={{
                          width: "35px",
                          height: "35px",
                          borderRadius: "50%",
                          backgroundColor: "#ff9d00",
                          color: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "600",
                          marginRight: "15px",
                        }}
                      >
                        {index + 1}
                      </div>

                      <span
                        style={{
                          color: "#555",
                          fontSize: "15px",
                        }}
                      >
                        {task}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          ) : (

            /* ================================================= */
            /* PROJECT LIST */
            /* ================================================= */

            <div>

              {/* Page Header */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px",
                  flexWrap: "wrap",
                  gap: "15px",
                }}
              >

                <div>

                  <h2
                    style={{
                      margin: 0,
                      color: "#2d1b12",
                      fontSize: "30px",
                      fontWeight: "700",
                    }}
                  >
                    Projects
                  </h2>

                  <p
                    style={{
                      marginTop: "8px",
                      marginBottom: 0,
                      color: "#777",
                      fontSize: "15px",
                    }}
                  >
                    Manage and track all your projects
                  </p>

                </div>

                {/* Add Project Button */}

                <button
                  style={{
                    padding: "12px 22px",
                    backgroundColor: "#ff9d00",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "15px",
                    fontWeight: "600",
                    cursor: "pointer",
                    boxShadow:
                      "0 5px 15px rgba(255, 157, 0, 0.3)",
                  }}
                >
                  + Add Project
                </button>

              </div>

              {/* Projects Cards */}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "25px",
                }}
              >

                {projects.map((project) => (

                  <div
                    key={project.id}
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "18px",
                      padding: "25px",
                      boxShadow:
                        "0 8px 25px rgba(0, 0, 0, 0.08)",
                      borderTop:
                        "4px solid #ff9d00",
                      transition:
                        "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-8px)";

                      e.currentTarget.style.boxShadow =
                        "0 15px 35px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(0)";

                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(0, 0, 0, 0.08)";
                    }}
                  >

                    {/* Project Icon */}

                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "14px",
                        background:
                          "linear-gradient(135deg, #ff9d00, #ff6b00)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                        fontSize: "24px",
                        fontWeight: "700",
                        marginBottom: "20px",
                      }}
                    >
                      {project.id}
                    </div>

                    {/* Project Name */}

                    <h5
                      style={{
                        margin: "0 0 10px",
                        color: "#2d1b12",
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      {project.name}
                    </h5>

                    {/* Description */}

                    <p
                      style={{
                        color: "#777",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        minHeight: "45px",
                        marginBottom: "25px",
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Divider */}

                    <div
                      style={{
                        height: "1px",
                        backgroundColor: "#eeeeee",
                        marginBottom: "20px",
                      }}
                    ></div>

                    {/* Bottom Section */}

                    <div
                      style={{
                        display: "flex",
                        justifyContent:
                          "space-between",
                        alignItems: "center",
                      }}
                    >

                      <span
                        style={{
                          color: "#999",
                          fontSize: "13px",
                        }}
                      >
                        Project #{project.id}
                      </span>

                      {/* View Project Button */}

                      <button
                        onClick={() =>
                          handleViewProject(project)
                        }
                        style={{
                          padding: "9px 16px",
                          backgroundColor:
                            "transparent",
                          color: "#ff9d00",
                          border:
                            "1px solid #ff9d00",
                          borderRadius: "8px",
                          fontSize: "13px",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                      >
                        View Project →
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Projects;

