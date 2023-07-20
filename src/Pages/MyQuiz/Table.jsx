import "./Table.css";
import { setSelectedQuizIndex, toggleActive } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Switch } from "@mui/material";
import ModalForDelete from "../../Components/ModalForDelete";
import { useNavigate } from "react-router-dom";
import { deleteQuiz } from "../../Redux/Actions";

function MyTable({ Quiz }) {
  // Get the list of all Quizzes from the redux store

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const activeQuiz = useSelector((state) =>
    state.reducer.quiz.map((obj) => obj.isActive)
  );
  // State for controlling the delete modal
  const [modal, setModal] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  // Function to open the delete modal
  const openModal = (id) => {
    setModal(true);

    setDeleteId(id);
    console.log("setId", deleteId);
  };

  // Function to close the delete modal
  const closeModal = () => {
    setModal(false);
  };

  const handleDeleteQuis = () => {
    dispatch(deleteQuiz(deleteId));
    closeModal();
    console.log("deleted", deleteQuiz(deleteId));
  };
  // Function to play a specific quiz
  const PlayThis = (i) => {
    const isQuizActive = activeQuiz[i];
    if (!isQuizActive) {
      dispatch(setSelectedQuizIndex(i));
      navigation("/signup");
    }
    // console.log("play index", setSelectedQuizIndex(i));
  };
  const handleActive = (id) => {
    dispatch(toggleActive(id));
  };

  return (
    <>
      {/* Render the delete modal when `modal` state is true */}
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
          <TableHead>
            <TableRow>
              <TableCell>Quiz No</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created on</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Quiz.map((quiz, i) => {
              return (
                <TableRow key={i}>
                  {/* Display the quiz number */}
                  <TableCell>{i + 1}</TableCell>

                  {/* Display the quiz title */}
                  <TableCell>{quiz.title}</TableCell>

                  {/* Display the quiz status and a switch to toggle it */}
                  <TableCell>
                    {quiz.isActive ? "InActive" : "Active"}
                    <Switch
                      defaultChecked={!quiz.isActive}
                      color="secondary"
                      onChange={(e) => handleActive(quiz.id)}
                    />
                  </TableCell>

                  {/* Display the creation date of the quiz */}
                  <TableCell>
                    {new Date(quiz.id).toLocaleDateString()}
                  </TableCell>

                  {/* Actions for each quiz (Edit, Delete, Play) */}
                  <TableCell>
                    <div>
                      {/* <BorderColorIcon /> Edit icon */}
                      <DeleteForeverIcon
                        fontSize="large"
                        onClick={() => openModal(quiz.id)}
                      />
                      {/* Delete icon */}
                      <PlayCircleOutlineIcon
                        fontSize="large"
                        onClick={() => PlayThis(i)}
                        disabled={quiz.isActive}
                      />
                      {/* Play icon */}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default MyTable;
