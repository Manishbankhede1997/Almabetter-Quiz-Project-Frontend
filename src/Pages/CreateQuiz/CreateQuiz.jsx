import "./CreateQuiz.css";
import React, { useState, useEffect, useRef } from "react";
import { Button, Checkbox, TextField } from "@mui/material";
import { TextareaAutosize } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useDispatch } from "react-redux";
import { addQuiz } from "../../Redux/Actions";
import Error from "../../Components/Error";
import { useNavigate } from "react-router-dom";
import HomePageModal from "./Modals";

function CreateQuiz() {
  // Refs to handle input elements
  const questionInputRef = useRef(null);
  const optionInputRef = useRef(null);

  // Navigation hook
  const navigation = useNavigate();

  // State for quiz, question, and option data
  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
    id: Date.now(),
    isActive: false,
    questions: [],
  });
  const [ques, setQues] = useState({
    question: "",
    options: [],
    correctoption: "",
    id: Date.now(),
  });
  const [option, setOption] = useState({
    id: "",
    title: "",
  });

  // State to manage the count of questions and errors
  const [count, setCount] = useState(1);
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [added, setAdded] = useState(false);

  // Redux dispatch hook
  const dispatch = useDispatch();

  // useEffect to clear added status after a certain time
  useEffect(() => {
    const handleError = setTimeout(() => {
      if (added) {
        setAdded(false);
      }
    }, 2000);
    return () => {
      clearTimeout(handleError);
    };
  }, [added]);

  // useEffect to handle the Enter key press for adding options
  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        handleAddoption();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [option.title]);

  // Function to add the quiz and handle validation
  const handleAddQuiz = (e) => {
    e.preventDefault();
    if (quiz.questions.length <= 0) {
      setError({
        error: true,
        message: "Minimum one question required for the quiz",
      });
      return;
    } else if (quiz.title.length < 5) {
      setError({ error: true, message: "Please set a title first" });
    } else {
      setError(false);

      dispatch(addQuiz(quiz));
      navigation("/myQuiz");
    }
  };

  // Function to delete an option
  const deleteOption = (id) => {
    const updatedOption = ques.options.filter((opt) => opt.id !== id);
    setQues({
      ...ques,
      options: updatedOption,
    });
  };

  // Function to handle question addition
  const handleQuestion = () => {
    if (ques.options.length < 2) {
      setError({
        error: true,
        message: "Minimum two options are required",
      });
      return;
    } else if (!ques.correctoption) {
      setError({
        error: true,
        message: "Please check the correct option",
      });
      return;
    } else if (!ques.question) {
      setError({
        error: true,
        message: "Please write the question first",
      });
      return;
    } else {
      setQuiz({
        ...quiz,
        questions: [...quiz.questions, ques],
      });
      setCount(count + 1);
      setError({ error: false, message: "" });
      setAdded(true);

      setQues({
        question: "",
        options: [],
        correctoption: "",
        id: Date.now(),
      });
      setOption({
        id: "",
        title: "",
      });
      questionInputRef.current.value = "";
    }
  };

  // Function to add an option
  const handleAddoption = () => {
    setError({ error: false, message: "" });

    if (
      questionInputRef.current.value === "" ||
      optionInputRef.current.value === ""
    ) {
      return;
    }
    if (ques.options.length >= 4) {
      setError({ error: true, message: "You can set only four options" });
    } else {
      setQues({
        ...ques,
        options: [...ques.options, option],
      });
      optionInputRef.current.value = "";
    }
  };

  // Function to update the option state
  const addOption = (e) => {
    setOption({
      id: Date.now(),
      title: e.target.value,
    });
  };

  return (
    <>
      {/* Modal for displaying the MCQ(Single Correct) button */}
      <HomePageModal buttonName="MCQ(Single Correct)" />

      <div className="quizbackground">
        <h1 className="heading">Create New Quiz</h1>

        <div className="background">
          {error.error && <Error message={error.message} />}

          <div
            style={{
              border: "1px solid grey",
              width: "90%",
              padding: "5px",
              textAlign: "center",
            }}
          >
            {/* Input for Quiz Title */}
            <TextField
              style={{
                marginBottom: 10,
                backgroundColor: "white",
                width: "98%",
              }}
              label="Quiz Title"
              variant="outlined"
              size="small"
              onChange={(e) => {
                setError(false);
                setQuiz({
                  ...quiz,
                  title: e.target.value,
                });
              }}
            />

            {/* Textarea for Quiz Description */}
            <TextareaAutosize
              aria-label="minimum height"
              color="neutral"
              variant="outlined"
              minRows={2}
              style={{ width: "98%", border: "1px solid", paddingLeft: "10px" }}
              placeholder="Add description"
              onChange={(e) => {
                setQuiz({
                  ...quiz,
                  description: e.target.value,
                });
              }}
            />
          </div>

          {/* Section for adding questions and options */}
          <div className="quesAns">
            <span style={{ paddingBottom: "2px" }}>Question {count}</span>
            <TextField
              inputRef={questionInputRef}
              variant="outlined"
              placeholder="Write Questions"
              style={{
                width: "90%",
                border: "1px solid",
                backgroundColor: "white",
              }}
              onChange={(e) => {
                setError(false);
                setQues({
                  ...ques,
                  question: e.target.value,
                });
              }}
              size="small"
            />

            {/* Display message if the question has been added */}
            {added && <p className="errorPera">Question has been added</p>}

            {/* Container for displaying options */}
            <div className="optioncontainer">
              {ques?.options.map((opt, i) => {
                return (
                  <div className="forOption" key={i}>
                    <div className="innerOption">
                      <span>{opt.title}</span>
                      <DeleteForeverIcon
                        style={{ marginRight: "6px" }}
                        onClick={() => {
                          deleteOption(opt.id);
                        }}
                      />
                    </div>

                    <div className="correct">
                      <span>Correct Option</span>
                      <Checkbox
                        size="small"
                        onChange={(e) => {
                          if (e.target.value) {
                            setQues({
                              ...ques,
                              correctoption: opt.title,
                            });
                          }
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Input for adding options */}
            <div className="inputOption">
              <TextField
                variant="outlined"
                inputRef={optionInputRef}
                placeholder="Add options"
                style={{
                  width: "auto",
                  backgroundColor: "white",
                }}
                onChange={addOption}
                size="small"
              />

              <AddBoxIcon onClick={handleAddoption} />
            </div>
          </div>

          {/* Button to add a new question */}
          <div className="addques">
            <Button
              variant="outlined"
              style={{ backgroundColor: "white" }}
              onClick={handleQuestion}
            >
              <AddBoxIcon /> Add Question
            </Button>
          </div>

          {/* Button to submit the quiz */}
          <div className="submit">
            <Button variant="contained" onClick={handleAddQuiz}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateQuiz;
