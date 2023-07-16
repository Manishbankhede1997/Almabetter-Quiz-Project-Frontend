import "./Table.css";
import { setSelectedQuizIndex } from "../../Redux/Actions";
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
import { useEffect } from "react";

function MyTable({ Quiz }) {
  // Get the list of all Quizzes from the redux store
  // const Quiz = useSelector((state) => state.reducer.quiz);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  // State for controlling the delete modal
  const [modal, setModal] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  // Function to open the delete modal
  const openModal = (id) => {
    setDeleteId(id);
    setModal(true);
  };

  // Function to close the delete modal
  const closeModal = () => {
    setModal(false);
  };

  // Function to play a specific quiz
  const PlayThis = (i) => {
    dispatch(setSelectedQuizIndex(i));
    navigation("/signup");
  };

  return (
    <>
      {/* Render the delete modal when `modal` state is true */}
      {modal && (
        <ModalForDelete
          closeModal={closeModal}
          openModal={openModal}
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
                    {quiz.isActive ? "Active" : "InActive"}
                    <Switch defaultChecked color="secondary" />
                  </TableCell>

                  {/* Display the creation date of the quiz */}
                  <TableCell>
                    {new Date(quiz.id).toLocaleDateString()}
                  </TableCell>

                  {/* Actions for each quiz (Edit, Delete, Play) */}
                  <TableCell>
                    <div className="editTableicon">
                      <BorderColorIcon /> {/* Edit icon */}
                      <DeleteForeverIcon
                        onClick={() => openModal(quiz.id)}
                      />{" "}
                      {/* Delete icon */}
                      <PlayCircleOutlineIcon onClick={() => PlayThis(i)} />{" "}
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
