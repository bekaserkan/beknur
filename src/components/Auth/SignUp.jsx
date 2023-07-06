import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Form } from "./Form";
import "./Auth.css"

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.id,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch((email) => {
        if(email == null){
          alert("")
        }
        alert("Ведите правильный email или пороль или такой email уже существует");
      });
  };

  return <Form title="register" handleClick={handleRegister} />;
};

export default SignUp;
