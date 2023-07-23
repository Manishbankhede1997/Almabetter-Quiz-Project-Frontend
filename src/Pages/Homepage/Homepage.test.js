import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Homepage from "./Homepage";

test("renders Homepage component without errors", () => {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );
});
test('renders "CREATE-NEW-QUIZ" link pointing to /createQuiz route', () => {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );

  const createQuizLink = screen.getByText("CREATE-NEW-QUIZ");
  expect(createQuizLink).toBeInTheDocument();
});

test('renders "MY QUIZ" link pointing to /myQuiz route', () => {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );

  const myQuizLink = screen.getByText("MY QUIZ");
  expect(myQuizLink).toBeInTheDocument();
});
