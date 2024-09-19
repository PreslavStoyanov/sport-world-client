import {useState} from "react";
import {Link} from "react-router-dom";
import {API_URLS} from '../config';

function ForgotPassword() {
  const [username, setUsername] = useState("");

  async function sentForgotPasswordRequest() {
    fetch(API_URLS.FORGOT_PASSWORD, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: username,
    }).then((response) => response.json());
    goToResetPassword();
    alert("Check your email");
  }

  function goToResetPassword() {
    window.location.href = "../resetPassword";
  }

  function goBack() {
    window.location.href = "../login";
  }

  return (
    <div id="box">
      <h1>Type your username</h1>
      <form className="form" onSubmit={(response) => response.preventDefault()}>
        <h3>Username</h3>
        <input
          className="input"
          type="text"
          name="username"
          placeholder="Enter username..."
          onChange={(response) => {
            setUsername(response.target.value);
          }}

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
        <Link to="" onClick={goBack}>
          Go back
        </Link>
        <br />
      </form>
    </div>
  );
}
export default ForgotPassword;
