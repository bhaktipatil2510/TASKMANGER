import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Check all fields
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    // Check password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // Check password match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Get existing users from localStorage
    const existingUsers = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    // Check if email already exists
    const userExists = existingUsers.some(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (userExists) {
      alert("This email is already registered. Please login.");
      return;
    }

    // Create new user
    const newUser = {
      name: name,
      email: email.toLowerCase(),
      password: password,
    };

    // Add new user
    existingUsers.push(newUser);

    // Save users
    localStorage.setItem(
      "users",
      JSON.stringify(existingUsers)
    );

    alert("Registration successful! Please login.");

    // Go to Login page
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage:
          "linear-gradient(rgba(15, 8, 5, 0.65), rgba(15, 8, 5, 0.65)), url('/login-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "950px",
          minHeight: "580px",
          display: "flex",
          background: "rgba(25, 15, 10, 0.85)",
          borderRadius: "25px",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* LEFT SIDE */}

        <div
          style={{
            width: "45%",
            padding: "55px 45px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "#ffffff",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "18px",
              background: "#ff9d00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "25px",
              color: "#ffffff",
            }}
          >
            ✓
          </div>

          <h1
            style={{
              fontSize: "42px",
              margin: "0 0 15px",
              lineHeight: "1.2",
            }}
          >
            Join Our <br />

            <span style={{ color: "#ff9d00" }}>
              Task Manager
            </span>
          </h1>

          <p
            style={{
              color: "#d6d6d6",
              lineHeight: "1.7",
              fontSize: "15px",
              maxWidth: "350px",
            }}
          >
            Organize your work, manage your tasks, and stay productive every day.
            Create your account and start managing your projects easily.
          </p>

          <div style={{ marginTop: "25px" }}>
            <p>✓ Manage your daily tasks</p>
            <p>✓ Track your projects</p>
            <p>✓ Stay organized and productive</p>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div
          style={{
            width: "55%",
            background: "rgba(255, 255, 255, 0.97)",
            padding: "45px 55px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              color: "#2b1a12",
              fontSize: "32px",
              margin: "0 0 8px",
            }}
          >
            Create Account
          </h2>

          <p
            style={{
              color: "#777",
              marginBottom: "25px",
            }}
          >
            Fill in your details to get started
          </p>

          <form onSubmit={handleRegister}>

            {/* Name */}

            <div style={{ marginBottom: "15px" }}>
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
              />
            </div>

            {/* Email */}

            <div style={{ marginBottom: "15px" }}>
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
            </div>

            {/* Password */}

            <div style={{ marginBottom: "15px" }}>
              <label>Password</label>

              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
              />

              <small style={{ color: "#888" }}>
                Use at least 6 characters
              </small>
            </div>

            {/* Confirm Password */}

            <div style={{ marginBottom: "25px" }}>
              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                style={inputStyle}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                height: "50px",
                border: "none",
                borderRadius: "10px",
                background: "#ff9d00",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              CREATE ACCOUNT
            </button>
          </form>

          <p
            style={{
              textAlign: "center",
              color: "#777",
              marginTop: "20px",
            }}
          >
            Already have an account?

            <Link
              to="/login"
              style={{
                marginLeft: "7px",
                color: "#ff9d00",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  height: "48px",
  padding: "0 15px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  outline: "none",
  boxSizing: "border-box",
  fontSize: "14px",
  marginTop: "6px",
};

export default Register;