import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="d-flex">
        <Sidebar />

        <div className="container-fluid p-4">

          <h2 className="mb-4">
            Dashboard
          </h2>

          <div className="row">

            <div className="col-md-4 mb-3">
              <div className="card shadow-sm text-center">
                <div className="card-body">
                  <h5>Total Projects</h5>
                  <h2 className="text-primary">3</h2>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card shadow-sm text-center">
                <div className="card-body">
                  <h5>Total Tasks</h5>
                  <h2 className="text-warning">15</h2>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card shadow-sm text-center">
                <div className="card-body">
                  <h5>Completed Tasks</h5>
                  <h2 className="text-success">8</h2>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;