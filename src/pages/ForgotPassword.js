import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URLS } from '../config';

function ForgotPassword() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  async function sentForgotPasswordRequest() {
    try {
      const response = await fetch(API_URLS.FORGOT_PASSWORD, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: username,
      });

      if (response.ok) {
        alert("Check your email for password reset instructions.");
        navigate("/resetPassword");
      } else {
        alert("Error: Unable to send password reset. Please try again.");
      }
    } catch (error) {
      console.error("Error sending forgot password request", error);
      alert("An error occurred. Please try again later.");
    }
  }

  return (
    <div id="box">
      <h1>Type your username</h1>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <h3>Username</h3>
        <input
          className="input"
          type="text"
          name="username"
          placeholder="Enter username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <br />
        <button className="btn" onClick={sentForgotPasswordRequest}>
          Change
        </button>
        <br />
        <br />
        <hr className="bar"></hr>
        <br />
        <Link to="/login">Go back</Link>
        <br />
      </form>
    </div>
  );
}

export default ForgotPassword;
