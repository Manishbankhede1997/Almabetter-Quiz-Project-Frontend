import "./App.css";
import Navbar from "./Components/Navbar";

import CreateQuiz from "./Pages/CreateQuiz/CreateQuiz";
import Homepage from "./Pages/Homepage/Homepage";
import ResultQuizPage from "./Pages/ResultQuizPage/ResultQuizPage";
import MyQuiz from "./Pages/MyQuiz/MyQuiz";
import PlayQuiz from "./Pages/PlayQuiz/PlayQuiz";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/CreateQuiz/Modals";
import Signup from "./Pages/SignupPage/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/createQuiz" element={<CreateQuiz />} />
          <Route path="/myQuiz" element={<MyQuiz />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/playQuiz" element={<PlayQuiz />} />
          <Route path="/resultQuiz" element={<ResultQuizPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
