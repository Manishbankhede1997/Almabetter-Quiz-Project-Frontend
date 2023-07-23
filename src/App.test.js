import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import App from "./App";
import configureMockStore from "redux-mock-store";

//  mock store
const mockStore = configureMockStore([]);

// Test the App component wrapped in the Provider with the mock store
test("renders learn react link", () => {
  const store = mockStore({
    Reducer: {
      initialState: {
        quiz: localStorage.getItem("quizData")
          ? JSON.parse(localStorage.getItem("quizData"))
          : [],

        // Retrieve user name from localStorage or set it to an empty string if not available
        name: localStorage.getItem("name") || "",

        // Array to store user's answers to quiz questions
        answers: [],

        // Index of the currently selected quiz
        selectedQuizIndex: 0,
      },
    },
  });

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText("My Quiz");
  expect(linkElement).toBeInTheDocument();
});
