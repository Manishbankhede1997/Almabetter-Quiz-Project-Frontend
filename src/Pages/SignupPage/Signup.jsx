import React from "react";
import { useState } from "react";
import "./Signup.css";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Error from "../../Components/Error";
function Signup() {
  const navigation = useNavigate();
  const [name, setName] = useState("");
  const [error, setError] = useState({ error: false, message: "" });
  const handleChange = (e) => {
    setName(e.target.value);
    setError({
      error: false,
      message: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setError({ error: true, message: "Please fill  Full-Name" });
    } else {
      navigation("/playQuiz");
      console.log("name", name);
    }
  };
  return (
    <div className="sign-body">
      <div className="sign-bg">
        <h2 className="tittle-heading">Title of the Quiz</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          nihil fuga excepturi dolorum quaerat soluta optio facere velit
          expedita delectus iure nobis animi aut. Nulla quibusdam similique sed
          cupiditate maxime? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Maxime quia facere amet esse quam enim reprehenderit repellendus
          est impedit similique. Lorem ipsum dolor sit, amet consectetur
        </p>

        <div>
          <span className="name">Write Your Name</span> <br />
          <TextField
            onChange={handleChange}
            variant="outlined"
            size="small"
            style={{ backgroundColor: "white" }}
          />
          {error.error && <Error message={error.message} />}
        </div>
        <br />
        <div>
          <Button
            variant="outlined"
            style={{
              paddingLeft: "25px",
              backgroundColor: "green",
              color: "white",
            }}
            onClick={handleSubmit}
          >
            Start-Quiz
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
