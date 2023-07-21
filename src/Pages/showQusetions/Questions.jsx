import React, { useState } from "react";
import "./Questions.css";
import { useSelector, useDispatch } from "react-redux";
import { updateQuiz } from "../../Redux/Actions";
import { Checkbox } from "@mui/material";

function Questions() {
  const quiz = useSelector((state) => state.reducer.quiz);
  const dispatch = useDispatch();

  const [flag, setFlag] = useState(false);
  const [updateValue, setUpdateValue] = useState("");
  const [updateOption, setUpdateOption] = useState([]);
  const [idx, setIdx] = useState(null);
  const [correctOption, setCorrectOption] = useState("");

  const handleEditQuestion = (editQues, update) => {
    if (update === "edit") {
      setFlag(true);
      setUpdateValue(editQues.question);
      setUpdateOption([...editQues.options]); // Create a copy of the options to edit
      setIdx(editQues.id);
    } else {
      setFlag(false);

      // If the "Save" button is clicked, update the specific question in the Redux store
      const updatedQuiz = quiz[quiz.length - 1].questions.map((ques) => {
        if (ques.id === editQues.id) {
          return {
            ...ques,
            question: updateValue,
            options: updateOption,
            correctoption: correctOption,
          };
        }
        return ques;
      });

      const updatedQuizData = {
        ...quiz[quiz.length - 1],
        questions: updatedQuiz,
      };

      // Dispatch an action to update the Redux store with the new quiz data
      dispatch(updateQuiz(updatedQuizData));
    }
  };

  const handleEditOption = (index, value) => {
    const updatedOptions = [...updateOption];
    updatedOptions[index].title = value;
    setUpdateOption(updatedOptions);
  };

  return (
    <div className="full-bg">
      <div className="ques-bg">
        <h2 className="heading">All Questions of This Quiz</h2>
        {quiz.length > 0 && quiz[quiz.length - 1].questions ? (
          quiz[quiz.length - 1].questions.map((ques, i) => (
            <div className="question" key={i}>
              {flag && idx === ques.id ? (
                // If the question is being edited, show an input field for editing
                <>
                  Question {i + 1 + "). "}
                  <input
                    type="text"
                    value={updateValue}
                    onChange={(e) => setUpdateValue(e.target.value)}
                  />
                  <div>
                    {updateOption.map((opt, j) => (
                      <div key={j}>
                        <Checkbox
                          size="small"
                          onChange={() => setCorrectOption(opt.title)}
                          checked={correctOption === opt.title}
                        />
                        <input
                          type="text"
                          value={opt.title}
                          onChange={(e) => handleEditOption(j, e.target.value)}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="btn"
                    onClick={() => handleEditQuestion(ques, "update")}
                  >
                    Save
                  </button>
                </>
              ) : (
                // If not editing, display the question text
                <>
                  Question {i + 1 + "). "}
                  {ques.question}
                  <div>
                    {ques.options.map((opt, j) => (
                      <div key={j}>
                        {j + 1 + " "}
                        {opt.title}
                      </div>
                    ))}
                  </div>
                  <button
                    className="btn"
                    onClick={() => handleEditQuestion(ques, "edit")}
                  >
                    {flag && idx === ques.id ? "Update" : "Edit"}
                  </button>
                </>
              )}
            </div>
          ))
        ) : (
          // Display a fallback message if no questions are available
          <p>No questions available.</p>
        )}
      </div>
    </div>
  );
}

export default Questions;
