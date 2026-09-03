import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{
        width: "240px",
        minHeight: "calc(100vh - 70px)",
      }}
    >
      <h5 className="text-center mb-4">
        Menu
      </h5>

      <div className="nav flex-column">
        <NavLink
          to="/dashboard"
          className="nav-link text-white mb-2"
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          to="/projects"
          className="nav-link text-white mb-2"
        >
          📁 Projects
        </NavLink>

        <NavLink
          to="/tasks"
          className="nav-link text-white mb-2"
        >
          ✅ Tasks
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;