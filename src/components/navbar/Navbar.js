import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

import NavbarLinks from "./NavbarLinks";
import NavbarMenuButton from "./NavbarMenuButton";

const Navbar = ({ openDrawerFunc }) => {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#996600" }} position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Vujahday Script', cursive",
                color: "inherit",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
              component="a"
              href="/"
            >
              {"<"}Kartheekeyan {"/>"}
            </Typography>
          </Box>

          {/* only available in above "md" viewport */}
          <NavbarLinks />

          {/* only available in less than "md" viewport */}
          <NavbarMenuButton openDrawerFunc={openDrawerFunc} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
