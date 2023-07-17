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
export const reducer = (state = initialState, actions) => {
  if (actions.type === TYPE.ADDQUIZ) {
    // Action to add a new quiz to the state and local storage
    let localData = localStorage.getItem("quizData")
      ? JSON.parse(localStorage.getItem("quizData"))
      : [];
    localStorage.setItem(
      "quizData",
      JSON.stringify([...localData, actions.payload])
    );
    return { ...state, quiz: JSON.parse(localStorage.getItem("quizData")) };
  }

  if (actions.type === TYPE.TOGGLEACTIVE) {
    // Action to toggle the active status of a quiz
    const findElem = state.quiz.find((el) => el.id === actions.payload);
    const filteredArr = state.quiz.filter((el) => el.id !== actions.payload);
    const newArr = [
      { ...findElem, isActive: !findElem.isActive },
      ...filteredArr,
    ];
    return {
      ...state,
      quiz: newArr,
    };
  }

  if (actions.type === TYPE.DELETEQUIZ) {
    // Action to delete a quiz from the state and local storage
    let localData = localStorage.getItem("quizData")
      ? JSON.parse(localStorage.getItem("quizData"))
      : [];
    const filteredArr = localData.filter((el) => el.id !== actions.payload);
    localStorage.setItem("quizData", JSON.stringify(filteredArr));
    return {
      ...state,
      quiz: filteredArr,
    };
  }

  if (actions.type === TYPE.GETNAME) {
    // Action to get the user's name and store it in the state and local storage
    localStorage.setItem("name", actions.payload);
    return {
      ...state,
      name: actions.payload,
    };
  }

  if (actions.type === TYPE.GETANSWER) {
    // Action to add the user's answers to the state
    return {
      ...state,
      answers: [...state.answers, actions.payload],
    };
  }

  if (actions.type === TYPE.RESET) {
    // Action to reset certain state properties to their initial values
    return {
      ...state,
      name: "",
      answers: [],
    };
  }

  if (actions.type === TYPE.SET_SELECTED_QUIZ_INDEX) {
    // Action to set the index of the selected quiz
    return {
      ...state,
      selectedQuizIndex: actions.payload,
    };
  }

  // Return the current state for unhandled actions
  return state;
};
