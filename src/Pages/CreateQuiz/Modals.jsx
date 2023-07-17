import React, { useState } from "react";
import { Button, Modal, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const HomePageModal = ({ buttonName, typographyMessage }) => {
  // State to control the visibility of the modal
  const [open, setOpen] = useState(true);

  // Style object for the button
  const buttonStyle = {
    color: "black",
    backgroundColor: "white",
    "&:hover": { backgroundColor: "blue" },
    borderRadius: "20px",
  };

  // Style object for the modal content container
  const modalStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "150px",
  };

  return (
    <div>
      {/* The Modal component */}
      <Modal
        open={open} // Controls the visibility of the modal
        onClose={() => setOpen(false)} // Function to close the modal when the overlay is clicked or the escape key is pressed
        aria-labelledby="modal-title"
      >
        {/* Outer Box to center the modal */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          {/* Box containing the modal content */}
          <Box
            style={buttonStyle}
            sx={{
              width: "80%",
              maxWidth: "350px",
              "@media (max-width: 600px)": {
                width: "90%",
              },
            }}
          >
            {/* Modal content container */}
            <div
              style={modalStyle}
              sx={{
                padding: "10px",
                width: "100%",
              }}
            >
              {/* Modal Title */}
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{
                  fontWeight: "bold",
                  color: "red",
                  fontSize: "small",
                }}
              >
                {typographyMessage}
              </Typography>

              {/* Close Button */}
              <Button
                onClick={() => setOpen(false)} // Function to close the modal when the button is clicked
                variant="contained"
                sx={{
                  ...buttonStyle,
                  "&:hover": { backgroundColor: "rebeccapurple" },
                  width: "50%", // Adjust this value based on your preference
                }}
              >
                {buttonName}
                {/* MCQ (Single Correct) */}
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default HomePageModal;
