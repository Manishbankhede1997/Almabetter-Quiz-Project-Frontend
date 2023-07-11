import "./Table.css";
import React from "react";
import { useSelector } from "react-redux";
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
import { Switch } from "@mui/material";

function MyTable() {
  const Quiz = useSelector((state) => state.reducer.quiz);
  console.log("manish", Quiz);
  return (
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
                <TableCell>{new Date(quiz.id).toLocaleDateString()}</TableCell>
                <TableCell>
                  <div className="editTableicon">
                    <BorderColorIcon />
                    <DeleteForeverIcon />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}

          {/* Add more rows as needed */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyTable;
