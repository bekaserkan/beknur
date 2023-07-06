import React from "react";
import { Link } from "react-router-dom";
import { Login } from "../components/Auth/Login";

const LoginPage = () => {
  return (
    <div className="login">
      <h1
        style={{
          margin: "auto",
          marginTop: "15px",
          width: "80%",
          textAlign: "center",
          background: "#fff",
          borderRadius: "15px",
        }}
      >
        Login
      </h1>
      <Login />
      <p style={{ position: "absolute", bottom: "20px", left: "20px" }}>
        Or{" "}
        <Link style={{ color: "#00C2FF" }} to="/register">
          register
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
