export const TYPE = {
  ADDQUIZ: "ADDQUIZ", // Add a new quiz
  TOGGLEACTIVE: "TOGGLEACTIVE", // Toggle the active status of a quiz
  DELETEQUIZ: "DELETEQUIZ", // Delete a quiz
  GETNAME: "GETNAME", // Get the name of the user
  GETANSWER: "GETANSWER", // Get the user's answers to quiz questions
  RESET: "RESET", // Reset the quiz state
  SET_SELECTED_QUIZ_INDEX: "SET_SELECTED_QUIZ_INDEX", // Set the index of the selected quiz
  UPDATE_QUIZ: "UPDATE_QUIZ",
};

// Action to add a new quiz
export const addQuiz = (data) => {
  return {
    type: TYPE.ADDQUIZ,
    payload: data, // The new quiz data to be added
  };
};

// Action to toggle the active status of a quiz
export const toggleActive = (id) => {
  return {
    type: TYPE.TOGGLEACTIVE,
    payload: id, // The ID of the quiz to toggle the active status
  };
};

// Action to delete a quiz
export const deleteQuiz = (id) => {
  return {
    type: TYPE.DELETEQUIZ,
    payload: id, // The ID of the quiz to be deleted
  };
};

// Action to get the name of the user
export const getName = (name) => {
  return {
    type: TYPE.GETNAME,
    payload: name, // The name of the user
  };
};

// Action to get the user's answers to quiz questions
export const getAnswer = (ans) => {
  return {
    type: TYPE.GETANSWER,
    payload: ans, // The user's answers
  };
};

// Action to reset the quiz state
export const resetQuiz = () => {
  return {
    type: TYPE.RESET,
  };
};

// Action to set the index of the selected quiz
export const setSelectedQuizIndex = (index) => {
  return {
    type: TYPE.SET_SELECTED_QUIZ_INDEX,
    payload: index, // The index of the selected quiz
  };
};

export const updateQuiz = (updatedQuizData) => ({
  type: TYPE.UPDATE_QUIZ,
  payload: updatedQuizData,
});
