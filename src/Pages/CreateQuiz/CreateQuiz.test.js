import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import CreateQuiz from "./CreateQuiz";

// Mocking the useDispatch hook from react-redux to test dispatch actions
jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
}));

test("renders CreateQuiz component without errors", () => {
  render(
    <MemoryRouter>
      <CreateQuiz />
    </MemoryRouter>
  );
});

test("should display an error message for minimum one question required", () => {
  render(
    <MemoryRouter>
      <CreateQuiz />
    </MemoryRouter>
  );

  // Click the Submit button without adding any question
  fireEvent.click(screen.getByText("Submit"));

  // Expect the error message for minimum one question required to be displayed
  expect(
    screen.getByText("Minimum one question required for the quiz")
  ).toBeInTheDocument();
});

test("should add a question with options and correct option", () => {
  render(
    <MemoryRouter>
      <CreateQuiz />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByPlaceholderText("Write Questions"), {
    target: { value: "What is your favorite color?" },
  });
});
