import {useState} from "react";
import {API_URLS} from "../config";

function ChangePassword() {
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  async function sentChangeRequest() {
    const requestBody = {
      username: username,
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    fetch(API_URLS.CHANGE_PASSWORD, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(requestBody),
    }).then((response) => response.json());

    window.location.reload(true);
    window.location.href = "./matches";
  }

  return (
    <div id="box">
      <h1>Type your credentials and new password</h1>
      <form className="form" onSubmit={(response) => response.preventDefault()}>
        <h3>Username</h3>
        <input
          className="input"
          type="text"
          name="username"
          placeholder="Enter username..."
          onChange={(response) => setUsername(response.target.value)}
        />
        <br />
        <h3>Old password</h3>
        <input
          className="input"
          type="password"
          name="oldPassword"
          placeholder="Enter old password..."
          onChange={(response) => setOldPassword(response.target.value)}
        />
        <br />
        <h3>New password</h3>
        <input
          className="input"
          type="password"
          name="newPassword"
          placeholder="Enter new password..."
          onChange={(response) => setNewPassword(response.target.value)}
        />
        <br />
        <br />
        <button className="btn" onClick={sentChangeRequest}>
          Change
        </button>
        <br />
      </form>
    </div>
  );
}
export default ChangePassword;
