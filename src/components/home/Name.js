import { Box, Typography } from "@mui/material";
import React from "react";

const Name = () => {
  return (
    <>
      <Box sx={{ mt: 5, pt: 5 }}>
        <Typography
          sx={{
            fontSize: {
              xs: "2.7rem",
              sm: "4rem",
              md: "5rem",
              lg: "7rem",
            },
          }}
        >
          Kartheekeyan S
        </Typography>
      </Box>
    </>
  );
};

export default Name;
