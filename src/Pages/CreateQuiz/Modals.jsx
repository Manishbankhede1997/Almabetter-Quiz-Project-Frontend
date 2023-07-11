import React, { useState } from "react";
import { Button, Modal } from "@mui/material";
import Box from "@mui/material/Box";

const HomePageModal = () => {
  const [open, setOpen] = useState(true);
  const buttonStyle = {
    color: "black",
    backgroundColor: "white",
    "&:hover": { backgroundColor: "blue" },
    borderRadius: "20px",
  };
  const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "150px",
    width: "350px",
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
      >
        <Box position="absolute" top="35vh" left="35vw" style={buttonStyle}>
          <div style={modalStyle}>
            <Button
              onClick={() => setOpen(false)}
              variant="contained"
              sx={{ ...buttonStyle, "&:hover": { backgroundColor: "blue" } }}
            >
              MCQ (Single Correct)
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default HomePageModal;
