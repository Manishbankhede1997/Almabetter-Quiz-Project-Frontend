import "./Table.css";
import React, { useEffect } from "react";
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
function MyTable() {
  const Quiz = useSelector((state) => state.reducer.quiz);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [modal, setModal] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  console.log("manish", Quiz);

  const openModal = (id) => {
    setDeleteId(id);
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const PlayThis = (i) => {
    dispatch(setSelectedQuizIndex(i));
    navigation("/signup");
  };
  useEffect(() => {
    // Show alert when Quiz is empty
    if (Quiz.length === 0) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [Quiz]);
  return (
    <>
      {modal && (
        <ModalForDelete
          closeModal={closeModal}
          openModal={openModal}
          id={deleteId}
        />
      )}
      {showAlert && <div>No Quiz Available to Play</div>}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Quiz No</TableCell>
              <TableCell>title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created on</TableCell>
              <TableCell>action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Quiz.map((quiz, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{quiz.title}</TableCell>
                  <TableCell>
                    {quiz.isActive ? "Active" : "InActive"}
                    <Switch defaultChecked color="secondary" />
                  </TableCell>
                  <TableCell>
                    {new Date(quiz.id).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="editTableicon">
                      <BorderColorIcon />
                      <DeleteForeverIcon onClick={() => openModal(quiz.id)} />
                      <PlayCircleOutlineIcon onClick={() => PlayThis(i)} />
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
