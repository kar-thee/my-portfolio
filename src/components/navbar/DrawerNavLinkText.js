import { Typography } from "@mui/material";
import React from "react";

const DrawerNavLinkText = ({ name, href, closeDrawerFunc }) => {
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
        onClick={closeDrawerFunc}
      >
        {name}
      </Typography>
    </>
  );
};

export default DrawerNavLinkText;
