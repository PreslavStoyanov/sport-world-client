import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URLS } from "../config";

function ResetPassword() {
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function sentChangeRequest() {
    const requestBody = {
      token,
      newPassword,
    };

    setLoading(true);  // Set loading state
    try {
      const response = await fetch(API_URLS.RESET_PASSWORD, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to reset password.");
      }

      alert("Password reset successfully");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="box">
      <h1>Type your data</h1>
      <form className="form" onSubmit={(e) => {
        e.preventDefault();
        sentChangeRequest();
      }}>
        <h3>Unique code</h3>
        <input
          className="input"
          type="text"
          name="code"
          placeholder="Enter code..."
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
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
        <br />
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Changing..." : "Change"} {/* Show loading text */}
        </button>
        <br />
      </form>
    </div>
  );
}

export default ResetPassword;
