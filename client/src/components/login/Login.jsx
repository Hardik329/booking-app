import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

axios.defaults.baseURL='/api'

const Login = ({ type }) => {
  console.log(type);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    if (type === "login") return username.length > 0 && password.length > 0;
    return username.length > 0 && password.length > 0 && email.length > 0;
    // return false;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (type === "login") {
      axios.post("/auth/login", {
        username: username,
        password: password,
      });
    }
  }

  return (
    <div className="base">
      <div className="container">
        <div className="input">
          <label htmlFor="username">Username</label>
          <input name="username"></input>
        </div>

        {type !== "login" && (
          <div className="input">
            <label htmlFor="email">Email</label>
            <input name="email"></input>
          </div>
        )}

        <div className="input">
          <label htmlFor="password">Password</label>
          <input name="password"></input>
        </div>

        <button className="btn" onClick={handleSubmit}>
          {type === "login" ? "Login" : "Register"}
        </button>
      </div>
    </div>
  );
};

export default Login;
