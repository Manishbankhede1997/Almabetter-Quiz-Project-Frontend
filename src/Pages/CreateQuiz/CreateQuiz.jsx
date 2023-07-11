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
  const questionInputRef = useRef(null);
  const optionInputRef = useRef(null);
  const navigation = useNavigate();
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
  const [count, setCount] = useState(1);
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [added, setAdded] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const handlerror = setTimeout(() => {
      if (added) {
        setAdded(false);
      }
    }, 2000);
    return () => {
      clearTimeout(handlerror);
    };
  }, [added]);

  const handleAddQuiz = (e) => {
    e.preventDefault();
    if (quiz.questions.length <= 0) {
      setError({ error: true, message: "minimum one quiz required for quiz" });
      return;
    } else if (quiz.title.length < 5) {
      setError({ error: true, message: "please set Title firstly" });
    } else {
      setError(false);
      console.log("quiz", quiz);
      dispatch(addQuiz(quiz));
      navigation("/myQuiz");
    }
  };
  const deleteOption = (id) => {
    const updatedOption = ques.options.filter((opt) => opt.id !== id);
    setQues({
      ...ques,
      options: updatedOption,
    });
  };
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
        message: "Please cheack correct option",
      });
      return;
    } else if (!ques.question) {
      setError({
        error: true,
        message: "Please write question first",
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
      console.log(ques);
    }
  };
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

      console.log(ques);
    }
  };
  const addOption = (e) => {
    setOption({
      id: Date.now(),
      title: e.target.value,
    });
  };

  return (
    <div>
      <HomePageModal />
      <div className="quizbackground">
        <h1 className="heading">Create New Quiz</h1>

        <div className="background">
          {error.error && <Error message={error.message} />}

          <div
            style={{
              border: "1px solid grey",
              width: "80%",
              padding: "5px",
              textAlign: "center",
            }}
          >
            <TextField
              style={{
                marginBottom: 10,
                backgroundColor: "white",
                width: "98%",
              }}
              label="Quiz Tittle"
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
            <TextareaAutosize
              aria-label="minimum height"
              color="neutral"
              variant="outlined"
              minRows={3}
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
          <div className="quesAns">
            <span>question {count}</span>
            <TextField
              inputRef={questionInputRef}
              variant="outlined"
              style={{
                width: "58vw",
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
            {added && <p className="errorPera">question has been added</p>}
            <div className="optioncontainer">
              {ques?.options.map((opt, i) => {
                return (
                  <div className="forOption" key={i}>
                    <div className="innerOption">
                      <span>{opt.title}</span>
                      <DeleteForeverIcon
                        style={{ marginRight: "10px" }}
                        onClick={() => {
                          deleteOption(opt.id);
                        }}
                      />
                    </div>

                    <div className="correct">
                      <span>correct option</span>
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

              <div className="forOption">
                <div className="innerOption">
                  <TextField
                    variant="outlined"
                    inputRef={optionInputRef}
                    style={{
                      width: "58vw",
                      border: "1px solid",
                      backgroundColor: "white",
                    }}
                    onChange={addOption}
                    size="small"
                  />

                  <AddBoxIcon onClick={handleAddoption} />
                </div>
              </div>
            </div>
          </div>

          <div className="addques">
            <Button
              variant="outlined"
              style={{ backgroundColor: "white" }}
              onClick={handleQuestion}
            >
              <AddBoxIcon /> Add Question
            </Button>
          </div>
        </div>
        <div className="submit">
          <Button variant="contained" onClick={handleAddQuiz}>
            submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateQuiz;
