import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetQuiz } from "../Redux/Actions";

function Navbar() {
  // Get the Redux dispatch function
  const dispatch = useDispatch();

  // Function to handle the "Home," "My Quiz," and "Play Quiz" buttons' clicks
  const handleQuiz = () => {
    // Dispatch the action to reset the quiz state in the Redux store
    dispatch(resetQuiz());
  };

  // State to manage the visibility of the burger menu on smaller screens
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle the visibility of the burger menu
  const handleBurgerClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="Navbar">
      {/* Logo on the left side of the navbar */}
      <div className="navleft">
        <img className="logoNav" src="logo-a.png" alt="Almabetter" />
      </div>

      {/* Burger menu icon on smaller screens */}
      <div className="burger" onClick={handleBurgerClick}>
        <div className={`bar ${showMenu ? "change" : ""}`} />
        <div className={`bar ${showMenu ? "change" : ""}`} />
        <div className={`bar ${showMenu ? "change" : ""}`} />
      </div>

      {/* Navbar links on the right side */}
      <div className={`navRight ${showMenu ? "show" : ""}`}>
        {/* Home button with a link to the home page */}
        <Link to="/">
          <button onClick={handleQuiz}>Home</button>
        </Link>

        {/* My Quiz button with a link to the "My Quiz" page */}
        <Link to={"/myQuiz"}>
          <button onClick={handleQuiz}>My Quiz</button>
        </Link>

        {/* Play Quiz button with a link to the "Play Quiz" page */}
        <Link to={"/signup"}>
          <button onClick={handleQuiz}>Play Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
