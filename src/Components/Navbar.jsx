import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <img className="logoNav" src="logo-a.png" alt="Almabetter" />
      <div className="Nav">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to={"/myQuiz"}>
          <button>My Quiz</button>
        </Link>
        <Link to={"/signup"}>
          <button>Play Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
