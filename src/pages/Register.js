import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URLS } from '../config';

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(response) {
    response.preventDefault();
    try {
      await axios.post(API_URLS.REGISTER, {
        username: username,
        password: password,
        email: email
      });
      alert("User Registration Successfully");
      setUsername("");
      setPassword("");
      setEmail("");

      navigate("/login");

    } catch (err) {
      alert("Error during registration: " + err.message);
    }
  }

  return (
    <div id="box">
      <form className="form" onSubmit={handleSubmit}>
        <br></br>
        <h1>Welcome!</h1>
        <h3>Username</h3>
        <input
          className="input"
          type="text"
          name="username"
          placeholder="Enter username..."
          value={username}
          onChange={(response) => setUsername(response.target.value)}
        />
        <br />
        <h3>Password</h3>
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Enter password..."
          value={password}
          onChange={(response) => setPassword(response.target.value)}
        />
        <br />
        <h3>Email</h3>
        <input
          className="input"
          type="text"
          name="email"
          placeholder="Enter email..."
          value={email}
          onChange={(response) => setEmail(response.target.value)}
        />
        <br /> <br />
        <button className="btn" type="submit">Register</button>
        <br /> <br /> <hr className="bar"></hr> <br />
        <Link to="/login">Have an account?</Link>
      </form>
    </div>
  );
}

export default Register;