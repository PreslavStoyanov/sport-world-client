import { Link } from "react-router-dom";
import bar from "./bar.module.css";
import jwt_decode from "jwt-decode";

function Bar() {
  var token = localStorage.getItem("Authorization");
  var decodedToken = token === null ? "" : jwt_decode(token);

  return (
    <header className={bar.header}>
      <nav>
        <ul>
          <li>
            <Link to="/matches">Past Matches</Link>
          </li>
          <li>
            <Link to="/live">Live Matches</Link>
          </li>
          {
            decodedToken.role_id === 2 && (
              <li>
                <Link to="/createMatch">Create match</Link>
              </li>
            )}
          <li>
            <Link to="/users">Profile</Link>
          </li>
          <li>
            <Link to="/signout">Sign out</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Bar;
