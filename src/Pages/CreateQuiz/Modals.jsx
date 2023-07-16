// import React, { useState } from "react";
// import { Button, Modal, Typography } from "@mui/material";
// import Box from "@mui/material/Box";

// const HomePageModal = ({ buttonName, typographyMessage }) => {
//   const [open, setOpen] = useState(true);
//   const buttonStyle = {
//     color: "black",
//     backgroundColor: "white",
//     "&:hover": { backgroundColor: "blue" },
//     borderRadius: "20px",
//   };
//   const modalStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "150px",
//     width: "350px",
//   };

//   return (
//     <div>
//       <Modal
//         open={open}
//         onClose={() => setOpen(false)}
//         aria-labelledby="modal-title"
//       >
//         <Box
//           position="absolute"
//           top="35vh"
//           left="35vw"
//           style={buttonStyle}
//           sx={{
//             "@media (max-width: 768px)": {
//               top: "30vh",
//               left: "23%",
//               height: "auto",
//               width: "50%",
//             },
//             "@media (max-width: 500px)": {
//               top: "32vh",
//               left: "17%",
//               right: "5%",
//               height: "auto",
//               width: "60%",
//             },
//             "@media (max-width: 350px)": {
//               top: "32vh",
//               left: "17%",
//               right: "5%",
//               height: "auto",
//               width: "60%",
//             },
//           }}
//         >
//           <div
//             style={modalStyle}
//             sx={{
//               "@media (max-width: 768px)": {
//                 padding: "10px",
//               },
//               "@media (max-width: 500px)": {
//                 padding: "5px",
//                 width: "25px",
//               },
//             }}
//           >
//             <Typography
//               id="modal-modal-title"
//               variant="h6"
//               component="h2"
//               style={{
//                 fontWeight: "bold",
//                 color: "red",
//                 fontSize: "small", // Change 'size' to 'fontSize'
//               }}
//             >
//               {typographyMessage}
//             </Typography>

//             <Button
//               onClick={() => setOpen(false)}
//               variant="contained"
//               sx={{
//                 ...buttonStyle,
//                 "&:hover": { backgroundColor: "pink" },
//                 "@media (max-width: 768px)": {
//                   width: "45%",
//                 },
//                 "@media (max-width: 500px)": {
//                   fontSize: "14px",
//                   right: "9%",
//                 },
//                 "@media (max-width: 350px)": {
//                   fontSize: "14px",
//                   right: "9%",
//                 },
//               }}
//             >
//               {buttonName}
//               {/* MCQ (Single Correct) */}
//             </Button>
//           </div>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default HomePageModal;

import React, { useState } from "react";
import { Button, Modal, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const HomePageModal = ({ buttonName, typographyMessage }) => {
  const [open, setOpen] = useState(true);
  const buttonStyle = {
    color: "black",
    backgroundColor: "white",
    "&:hover": { backgroundColor: "blue" },
    borderRadius: "20px",
  };
  const modalStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "150px",
    width: "290px",
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
      >
        <Box
          position="absolute"
          top="35vh"
          left="35vw"
          style={buttonStyle}
          sx={{
            "@media (max-width: 768px)": {
              top: "32h",
              left: "28%",
              height: "auto",
              width: "44%",
            },
            "@media (max-width: 500px)": {
              top: "32vh",
              left: "19%",
              right: "5%",
              height: "auto",
              width: "56%",
            },
            "@media (max-width: 350px)": {
              top: "32vh",
              left: "10%",
              right: "10%",
              height: "auto",
              width: "80%",
            },
          }}
        >
          <div
            style={modalStyle}
            sx={{
              "@media (max-width: 768px)": {
                padding: "10px",
              },
              "@media (max-width: 500px)": {
                padding: "5px",
                fontSize: "11px",
                right: "2px",
                width: "77px",
              },
              "@media (max-width: 350px)": {
                fontSize: "11px",
                width: "43px",
                right: "3%",
                margin: "5px",
              },
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{
                fontWeight: "bold",
                color: "red",
                fontSize: "small", // Change 'size' to 'fontSize'
              }}
            >
              {typographyMessage}
            </Typography>

            <Button
              onClick={() => setOpen(false)}
              variant="contained"
              sx={{
                ...buttonStyle,
                "&:hover": { backgroundColor: "pink" },
                "@media (max-width: 768px)": {
                  width: "35%",
                  padding: "5px",
                },
                "@media (max-width: 500px)": {
                  fontSize: "14px",
                  right: "9%",
                },
                "@media (max-width: 350px)": {
                  fontSize: "14px",
                  right: "4%",
                  width: "auto",
                  padding: "2px",
                },
              }}
            >
              {buttonName}
              {/* MCQ (Single Correct) */}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default HomePageModal;
