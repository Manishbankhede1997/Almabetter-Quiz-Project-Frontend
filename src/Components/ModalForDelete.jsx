import { Button, Modal, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";

import { deleteQuiz } from "../Redux/Actions";

const ModalForDelete = ({ closeModal, openModal, id }) => {
  const dispatch = useDispatch();

  // Function to handle the delete action and close the modal
  const handleDeleteQuis = (id) => {
    dispatch(deleteQuiz(id));
    closeModal();
  };

  // Styles for the buttons and the button container
  const modalStyle = {
    display: "flex",
    alignItems: "center",
    paddingTop: "20px",
    justifyContent: "space-evenly",
  };

  // Styles for the modal content container
  const modalBack = {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    color: "black",
    backgroundColor: "white",
  };

  return (
    <div>
      {/* The Modal component */}
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="modal-title"
      >
        {/* Outer Box to center the modal */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh" // Use full viewport height
        >
          {/* Box containing the modal content */}
          <Box
            sx={{
              width: "80%",
              maxWidth: "500px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
            }}
          >
            {/* Modal Title */}
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ fontWeight: "bold" }}
            >
              Are you sure you want to delete?
            </Typography>
            {/* Modal Description */}
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Deleting this will result in losing the file permanently and is
              not recoverable.
            </Typography>
            {/* Button container */}
            <div style={modalStyle}>
              {/* Close button */}
              <Button
                style={{ backgroundColor: "red", color: "white" }}
                variant="outlined"
                onClick={closeModal}
              >
                Close
              </Button>
              {/* Delete button */}
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
        </Box>
      </Modal>
    </div>
  );
};

export default ModalForDelete;
