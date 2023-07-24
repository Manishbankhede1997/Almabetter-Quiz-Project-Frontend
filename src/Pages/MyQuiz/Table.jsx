import "./Table.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ModalForDelete from "../../Components/ModalForDelete";
import { useNavigate } from "react-router-dom";
import {
  deleteQuiz,
  setSelectedQuizIndex,
  toggleActive,
} from "../../Redux/Actions";

// The function component for the table
function MyTable({ Quiz }) {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  // Selector to get the array of 'isActive' values from the Redux state
  const activeQuiz = useSelector((state) =>
    state.reducer.quiz.map((obj) => obj.isActive)
  );

  // State variables for handling the modal dialog
  const [modal, setModal] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(0);

  // Function to open the modal dialog with the selected ID
  const openModal = (id) => {
    setModal(true);
    setDeleteId(id);
    console.log("setId", deleteId);
  };

  // Function to close the modal dialog
  const closeModal = () => {
    setModal(false);
  };

  // Function to handle the deletion of a quiz
  const handleDeleteQuis = () => {
    dispatch(deleteQuiz(deleteId)); // Dispatch the action to delete the quiz with the given ID
    closeModal(); // Close the modal dialog
    console.log("deleted", deleteQuiz(deleteId));
  };

  // Function to handle clicking on the 'Play' button for a quiz
  const PlayThis = (i) => {
    const isQuizActive = activeQuiz[i]; // Check if the quiz at index i is active
    if (!isQuizActive) {
      // If the quiz is not active, proceed to set the selected quiz index and navigate to the signup page
      dispatch(setSelectedQuizIndex(i));
      navigation("/signup");
    }
  };

  // Function to handle toggling the active status of a quiz
  const handleActive = (id) => {
    dispatch(toggleActive(id)); // Dispatch the action to toggle the active status of the quiz with the given ID
  };

  return (
    <div style={{ overflowX: "auto" }}>
      {/* Modal dialog for delete confirmation */}
      {modal && (
        <ModalForDelete
          closeModal={closeModal}
          openModal={openModal}
          onModalClick={handleDeleteQuis}
          Typographymsg1={"Are you sure you want to delete?"}
          Typographymsg2={
            " Deleting this will result in losing the file permanently and is not recoverable"
          }
          button={"delete"}
          id={deleteId}
        />
      )}

      {/* Table to display the list of quizzes */}
      <TableContainer component={Paper}>
        <Table>
          {/* Table header */}
          <TableHead>
            <TableRow>
              <TableCell>Quiz No</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created on</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          {/* Table body */}
          <TableBody>
            {/* Mapping through the Quiz array to display each quiz */}
            {Quiz.map((quiz, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{quiz.title}</TableCell>
                <TableCell>
                  {quiz.isActive ? "InActive" : "Active"}{" "}
                  {/* Display active status */}
                  <Switch
                    defaultChecked={!quiz.isActive} // Set the initial state of the switch based on the active status of the quiz
                    color="secondary"
                    onChange={() => handleActive(quiz.id)} // Call handleActive function when the switch is toggled
                  />
                </TableCell>
                <TableCell>{new Date(quiz.id).toLocaleDateString()}</TableCell>
                <TableCell>
                  <div>
                    {/* Delete icon with onClick event to open the delete confirmation modal */}
                    <DeleteForeverIcon
                      fontSize="large"
                      onClick={() => openModal(quiz.id)}
                    />
                    {/* Play icon with onClick event to play the quiz (if it's not active) */}
                    <PlayCircleOutlineIcon
                      fontSize="large"
                      onClick={() => PlayThis(i)}
                      disabled={quiz.isActive} // Disable the play button if the quiz is active
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MyTable;
