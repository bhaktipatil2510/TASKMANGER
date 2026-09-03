import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      style={{
        width: "100%",
        height: "70px",
        background: "linear-gradient(90deg, #2d1b12, #4a2815)",
        display: "flex",
        alignItems: "center",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "0 30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <div
          onClick={() => navigate("/dashboard")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              background: "#ff9d00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            ✓
          </div>

          <div>
            <h5
              style={{
                margin: 0,
                color: "#ffffff",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Task Manager
            </h5>

            <small style={{ color: "#cfcfcf" }}>
              Manage your tasks easily
            </small>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "#ff9d00",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "700",
              }}
            >
              B
            </div>

            <div>
              <small
                style={{
                  display: "block",
                  color: "#bdbdbd",
                }}
              >
                Welcome back
              </small>

              <span
                style={{
                  color: "#ffffff",
                  fontWeight: "600",
                }}
              >
                Bhakti
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            style={{
              padding: "9px 18px",
              backgroundColor: "transparent",
              border: "1px solid #ff9d00",
              borderRadius: "8px",
              color: "#ff9d00",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;