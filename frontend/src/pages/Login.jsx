import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import IconInput from "../components/IconInput"; 
import Button from "../components/Button";       
import { useLogin } from "../hooks/login";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { error, loading, handleLogin, clearError } = useLogin();

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="card shadow p-4" style={{ width: "400px", borderRadius: "15px" }}>
        <h2 className="card-title mb-0 text-start fw-bold text-black">Login</h2>
        <p className="text-start mt-1 mb-3 text-secondary">Welcome back! Please login to your account.</p>

        <form onSubmit={onSubmit}>
          <IconInput
            label="Username"
            type="username"
            iconType="email"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              clearError("username"); 
            }}
            error={error.username}
          />

          <IconInput
            label="Password"
            type="password"
            iconType="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              clearError("password"); 
            }}
            error={error.password}                
          />

          {error.general && <small className="text-danger d-block">{error.general}</small>}

          <p className="text-end">
            <Link to="/forgotPassword">Forgot password?</Link>
          </p>

          <Button
            type="submit"
            variant="primary"
            className="button w-100 fw-semibold"
            style={{ borderRadius: "30px", padding: "12px 0", lineHeight: "1.2", fontSize: "0.9rem" }}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <p className="mt-3 text-center">
          Don't have an account? <Link to="/register1">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;