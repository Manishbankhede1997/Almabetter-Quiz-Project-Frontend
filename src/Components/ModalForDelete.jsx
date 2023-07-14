import { Button, Modal, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";

import { deleteQuiz } from "../Redux/Actions";
const ModalForDelete = ({ closeModal, openModal, id }) => {
  const dispatch = useDispatch();
  const handleDeleteQuis = (id) => {
    dispatch(deleteQuiz(id));
    closeModal();
  };
  const modalStyle = {
    display: "flex",
    alignItems: "center",
    paddingTop: "20px",

    justifyContent: "space-evenly",
  };
  const modalBack = {
    display: "flex",
    flexDirection: "column",
    padding: "20px",

    color: "black",
    backgroundColor: "white",
  };

  return (
    <div>
      <Modal
        open={() => openModal}
        onClose={() => closeModal}
        aria-labelledby="modal-title"
      >
        <Box
          position="absolute"
          top="35vh"
          left="30vw"
          sx={{ width: "80%", maxWidth: "500px" }}
          style={modalBack}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ fontWeight: "bold" }}
          >
            Are you sure you want to delete?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Deleting this will result in loosing the file permanently and is not
            recoverable
          </Typography>
          <div style={modalStyle}>
            <Button
              style={{ backgroundColor: "red", color: "white" }}
              variant="outlined"
              onClick={closeModal}
            >
              Close
            </Button>
            <Button
              style={{ backgroundColor: "red", color: "white" }}
              variant="outlined"
              onClick={() => {
                handleDeleteQuis(id);
              }}
            >
              Delete
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalForDelete;
