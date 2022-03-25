import { Typography } from "@mui/material";
import React from "react";

const NavLinkText = ({ name, href }) => {
  return (
    <>
      <Typography
        sx={{
          fontFamily: "'Vujahday Script', cursive",
          color: "inherit",
          textDecoration: "none",
        }}
        variant="h6"
        component="a"
        href={href}
      >
        {name}
      </Typography>
    </>
  );
};

export default NavLinkText;
