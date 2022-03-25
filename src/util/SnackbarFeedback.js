import { Alert, Snackbar } from "@mui/material";
import React from "react";

const SnackbarFeedback = ({ isOpen, handleCloseFeedback }) => {
  return (
    <>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleCloseFeedback}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Your Message Sent Successfully...
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackbarFeedback;
