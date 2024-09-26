import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URLS } from '../config';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function sendLoginRequest() {
    const requestBody = {
      username: username,
      password: password,
    };
    fetch(API_URLS.LOGIN, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("Authorization", data.token);
      })
      .then(() => {
        if (localStorage.getItem("Authorization") !== null || localStorage.getItem("Authorization") !== "undefined") {
          navigate("/football/live");
        } else {
          alert("Wrong username or password");
        }
      });
  }

  return (
    <div id="box">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <br />
        <h1>Welcome Back!</h1>
        <h3>Username</h3>
        <input
          className="input"
          type="text"
          value={username}
          placeholder="Enter username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <h3>Password</h3>
        <input
          className="input"
          type="password"
          value={password}
          placeholder="Enter password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button className="btn" onClick={sendLoginRequest}>Login</button>
        <br />
        <br />
        <hr className="bar"></hr>
        <br />
        <Link to="/register">Don't have an account?</Link>
        <br />
        <br />
        <hr className="bar"></hr>
        <br />
        <Link to="/forgotPassword">Forgot password?</Link>
      </form>
    </div>
  );
}

export default Login;
