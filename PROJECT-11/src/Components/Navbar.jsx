import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div className="nav">
        <div className="container">
          <Link className="btn" to="/signup">
            SignUp
          </Link>
          <Link className="btn" to="/login">
            Login
          </Link>
          <Link className="btn" to="/changepassword">
            Cp
          </Link>
          <Link className="btn" to="/forgotpassword">
            Fp
          </Link>
          <Link className="btn" to="/editprofile">
            Ep
          </Link>
          <Link className="btn" to="/display">
            Display
          </Link>
          <Link className="btn" to="/home">
            Home
          </Link>
          <svg
            className="outline"
            overflow="visible"
            width="400"
            height="60"
            viewBox="0 0 400 60"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
