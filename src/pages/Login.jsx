import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Check empty fields
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // Get registered users
    const existingUsers = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    // Find user
    const user = existingUsers.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase()
    );

    // Check email
    if (!user) {
      alert("Email is not registered. Please register first.");
      return;
    }

    // Check password
    if (user.password !== password) {
      alert("Incorrect password. Please try again.");
      return;
    }

    // Save login information
    localStorage.setItem(
      "token",
      "dummy-token"
    );

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        name: user.name,
        email: user.email,
      })
    );

    alert("Login successful!");

    // Navigate to Dashboard
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage:
          "linear-gradient(rgba(20, 10, 5, 0.35), rgba(20, 10, 5, 0.35)), url('/login-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "rgba(20, 12, 8, 0.78)",
          borderRadius: "20px",
          padding: "45px 40px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.45)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#ff9d00",
            fontSize: "38px",
            marginBottom: "35px",
          }}
        >
          Login
        </h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              height: "50px",
              padding: "0 15px",
              marginBottom: "18px",
              borderRadius: "12px",
              boxSizing: "border-box",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              height: "50px",
              padding: "0 15px",
              marginBottom: "25px",
              borderRadius: "12px",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            style={{
              display: "block",
              margin: "0 auto",
              padding: "13px 45px",
              border: "none",
              borderRadius: "30px",
              background: "#ff9d00",
              color: "#ffffff",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            LOGIN
          </button>

        </form>

        <p
          style={{
            textAlign: "center",
            color: "#ffffff",
            marginTop: "25px",
          }}
        >
          Don't have an account?

          <Link
            to="/register"
            style={{
              marginLeft: "7px",
              color: "#ff9d00",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;