import { Box, IconButton } from "@mui/material";
import React from "react";

import MenuIcon from "@mui/icons-material/Menu";

const NavbarMenuButton = ({ openDrawerFunc }) => {
  return (
    <>
      <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
        <IconButton
          sx={{
            color: "inherit",
            background: "#003399",
            "&:hover": {
              background: "white",
              color: "#996600",
            },
          }}
          onClick={openDrawerFunc}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default NavbarMenuButton;
