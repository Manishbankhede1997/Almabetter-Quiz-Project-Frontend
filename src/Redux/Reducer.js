import { TYPE } from "./Actions";

// Initial state of the app
const initialState = {
  // Retrieve quiz data from localStorage or set it to an empty array if not available
  quiz: localStorage.getItem("quizData")
    ? JSON.parse(localStorage.getItem("quizData"))
    : [],

  // Retrieve user name from localStorage or set it to an empty string if not available
  name: localStorage.getItem("name") || "",

  // Array to store user's answers to quiz questions
  answers: [],

  // Index of the currently selected quiz
  selectedQuizIndex: 0,
};

// Reducer function to update the state based on actions
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.ADDQUIZ:
      // Action to add a new quiz to the state and local storage
      const newQuizData = action.payload;
      localStorage.setItem(
        "quizData",
        JSON.stringify([...state.quiz, newQuizData])
      );
      return { ...state, quiz: [...state.quiz, newQuizData] };

    case TYPE.TOGGLEACTIVE:
      // Action to toggle the active status of a quiz
      const updatedQuizList = state.quiz.map((quiz) =>
        quiz.id === action.payload
          ? { ...quiz, isActive: !quiz.isActive }
          : quiz
      );
      localStorage.setItem("quizData", JSON.stringify(updatedQuizList));
      return { ...state, quiz: updatedQuizList };

    case TYPE.DELETEQUIZ:
      // Action to delete a quiz from the state and local storage
      const filteredQuizList = state.quiz.filter(
        (quiz) => quiz.id !== action.payload
      );
      localStorage.setItem("quizData", JSON.stringify(filteredQuizList));
      return { ...state, quiz: filteredQuizList };

    case TYPE.GETNAME:
      // Action to get the user's name and store it in the state and local storage
      localStorage.setItem("name", action.payload);
      return { ...state, name: action.payload };

    case TYPE.GETANSWER:
      // Action to add the user's answers to the state
      return { ...state, answers: [...state.answers, action.payload] };

    case TYPE.RESET:
      // Action to reset certain state properties to their initial values
      return { ...state, name: "", answers: [] };

    case TYPE.SET_SELECTED_QUIZ_INDEX:
      // Action to set the index of the selected quiz
      return { ...state, selectedQuizIndex: action.payload };

    case TYPE.UPDATE_QUIZ:
      // Action to update a quiz in the state and local storage
      const updatedQuizData = action.payload;
      const updatedQuizArr = state.quiz.map((quiz) =>
        quiz.id === updatedQuizData.id ? updatedQuizData : quiz
      );
      localStorage.setItem("quizData", JSON.stringify(updatedQuizArr));
      return { ...state, quiz: updatedQuizArr };

    default:
      // Return the current state for unhandled actions
      return state;
  }
};
