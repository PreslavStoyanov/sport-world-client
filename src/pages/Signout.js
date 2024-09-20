import React from "react";
import { useNavigate } from "react-router-dom";

function Signout() {
    const navigate = useNavigate();

    function handleSignOut() {
        localStorage.removeItem("Authorization");
        navigate("/login");
    }

    function stayOnPage() {
        navigate("/matches");
    }

    return (
        <div id="box">
            <h2>Are you sure you want to sign out?</h2>

            <button className="signout-btn" onClick={handleSignOut}>
                Yes
            </button>
            <br />
            <button className="signout-btn" onClick={stayOnPage}>
                No
            </button>
        </div>
    );
}

export default Signout;
