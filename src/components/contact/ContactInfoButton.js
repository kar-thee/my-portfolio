import { Avatar, Box } from "@mui/material";
import React from "react";

const ContactInfoButton = ({ svgItem }) => {
  return (
    <>
      <Box>
        <Avatar
          sx={{
            background: "#996600",
            transition: " .7s ease-out",

            "&:hover": {
              background: "#009966",
              transform: "scale(1.25)",
              transition: " .7s ease-in",
            },
          }}
        >
          {svgItem}
        </Avatar>
      </Box>
    </>
  );
};

export default ContactInfoButton;
