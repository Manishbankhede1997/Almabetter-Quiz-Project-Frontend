//  this containes all the action types and necessary actions required when needed in order to dispatch them //

export const TYPE = {
  ADDQUIZ: "ADDQUIZ",
  TOGGLEACTIVE: "TOGGLEACTIVE",
  DELETEQUIZ: "DELETEQUIZ",
  GETNAME: "GETNAME",
  PLAYQUIZ: "PLAYQUIZ",
  GETANSWER: "GETANSWER",
  RESET: "RESET",
  SET_SELECTED_QUIZ_INDEX: "SET_SELECTED_QUIZ_INDEX",
};

export const addQuiz = (data) => {
  return {
    type: TYPE.ADDQUIZ,
    payload: data,
  };
};

export const toggleActive = (id) => {
  return {
    type: TYPE.TOGGLEACTIVE,
    payload: id,
  };
};

export const deleteQuiz = (id) => {
  return {
    type: TYPE.DELETEQUIZ,
    payload: id,
  };
};

export const getName = (name) => {
  return {
    type: TYPE.GETNAME,
    payload: name,
  };
};

export const playQuiz = (id) => {
  return {
    type: TYPE.PLAYQUIZ,
    payload: id,
  };
};

export const getAnswer = (ans) => {
  return {
    type: TYPE.GETANSWER,
    payload: ans,
  };
};
export const resetQuiz = () => {
  return {
    type: TYPE.RESET,
  };
};
export const setSelectedQuizIndex = (index) => {
  console.log("india", index);
  return {
    type: TYPE.SET_SELECTED_QUIZ_INDEX,
    payload: index,
  };
};
