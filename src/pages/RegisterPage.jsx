import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../components/Auth/SignUp";

const RegisterPage = () => {
  return (
    <div className="register">
      <h1
        style={{
          margin: "auto",
          marginTop: "15px",
          width: "80%",
          textAlign: "center",
          color: " linear-gradient(#00F4F2, #75ACBD, #00C2FF)",
          background: "#fff",
          borderRadius: "15px",
        }}
      >
        Register
      </h1>
      <SignUp />
      <p style={{ position: "absolute", bottom: "20px", left: "20px" }}>
        Already have an account?{" "}
        <Link style={{ color: "#00C2FF" }} to="/login">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
