import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetQuiz } from "../Redux/Actions";

function Navbar() {
  const dispatch = useDispatch();
  const handleQuiz = () => {
    dispatch(resetQuiz());
  };
  return (
    <div className="Navbar">
      <img className="logoNav" src="logo-a.png" alt="Almabetter" />
      <div className="Nav">
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
