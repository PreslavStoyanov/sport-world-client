import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URLS } from "../config";

function ChangePassword() {
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function sentChangeRequest() {
    const requestBody = {
      username,
      oldPassword,
      newPassword,
    };

    try {
      const response = await fetch(API_URLS.CHANGE_PASSWORD, {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        alert("Password changed successfully!");
        navigate("/live");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to change password.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  }

  return (
    <div id="box">
      <h1>Type your credentials and new password</h1>
      <form className="form" onSubmit={(e) => { e.preventDefault(); sentChangeRequest(); }}>
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
        <h3>Old password</h3>
        <input
          className="input"
          type="password"
          name="oldPassword"
          placeholder="Enter old password..."
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <br />
        <h3>New password</h3>
        <input
          className="input"
          type="password"
          name="newPassword"
          placeholder="Enter new password..."
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <br />
        {error && <div className="error-message">{error}</div>}
        <br />
        <button className="btn" type="submit">
          Change
        </button>
        <br />
      </form>
    </div>
  );
}

export default ChangePassword;
