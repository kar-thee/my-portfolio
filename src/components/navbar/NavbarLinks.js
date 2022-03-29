import { Button, Stack } from "@mui/material";
import React from "react";

import NavLinkText from "./NavLinkText";

const NavbarLinks = () => {
  return (
    <>
      <Stack
        direction="row"
        sx={{
          flexGrow: 1,
          display: {
            xs: "none",
            md: "flex",
            justifyContent: "flex-end",
          },
        }}
        spacing={5}
      >
        <NavLinkText name="Home" href="/#home" />
        <NavLinkText name="About" href="/#about" />
        <NavLinkText name="Skills" href="/#skills" />
        <NavLinkText name="Projects" href="/#projects" />
        <NavLinkText name="Contact" href="/#contact" />

        <Button
          variant="contained"
          component="a"
          target="_blank"
          href="https://drive.google.com/file/d/1gDI9HIaE4uh_yMFbCipV944JxUHVevw0/view"
        >
          Resume
        </Button>
      </Stack>
    </>
  );
};

export default NavbarLinks;
