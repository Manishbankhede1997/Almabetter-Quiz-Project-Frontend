import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetQuiz } from "../Redux/Actions";

function Navbar() {
  const dispatch = useDispatch();
  const handleQuiz = () => {
    dispatch(resetQuiz());
  };

  const [showMenu, setShowMenu] = useState(false);

  const handleBurgerClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="Navbar">
      <div className="navleft">
        <img className="logoNav" src="logo-a.png" alt="Almabetter" />
      </div>

      <div className="burger" onClick={handleBurgerClick}>
        <div className={`bar ${showMenu ? "change" : ""}`} />
        <div className={`bar ${showMenu ? "change" : ""}`} />
        <div className={`bar ${showMenu ? "change" : ""}`} />
      </div>

      <div className={`navRight ${showMenu ? "show" : ""}`}>
        <Link to="/">
          <button onClick={handleQuiz}>Home</button>
        </Link>
        <Link to={"/myQuiz"}>
          <button onClick={handleQuiz}>My Quiz</button>
        </Link>
        <Link to={"/signup"}>
          <button onClick={handleQuiz}>Play Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
