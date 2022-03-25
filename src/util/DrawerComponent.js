import { Box, Button, Drawer, Stack } from "@mui/material";
import React from "react";
import DrawerNavLinkText from "../components/navbar/DrawerNavLinkText";

const DrawerComponent = ({ drawerOpen, closeDrawerFunc }) => {
  return (
    <>
      <Drawer
        anchor={"left"}
        open={drawerOpen}
        onClose={closeDrawerFunc}
        sx={{ color: "#009966" }}
      >
        <Box
          sx={{
            width: "80vw",
            my: 5,
            py: 4,
            textAlign: "center",
            background: "#e1f5fe",
          }}
        >
          <Stack spacing={5} sx={{ my: 5, py: 5 }}>
            <DrawerNavLinkText
              name="Home"
              href="/#home"
              closeDrawerFunc={closeDrawerFunc}
            />
            <DrawerNavLinkText
              name="About"
              href="/#about"
              closeDrawerFunc={closeDrawerFunc}
            />
            <DrawerNavLinkText
              name="Skills"
              href="/#skills"
              closeDrawerFunc={closeDrawerFunc}
            />
            <DrawerNavLinkText
              name="Projects"
              href="/#projects"
              closeDrawerFunc={closeDrawerFunc}
            />
            <DrawerNavLinkText
              name="Contact"
              href="/#contact"
              closeDrawerFunc={closeDrawerFunc}
            />

            <Button
              sx={{ textAlign: "center" }}
              component="a"
              target="_blank"
              href="https://drive.google.com/file/d/1gg5DIBwvW3B87oHVYz79TCQH5QXitwXX/view"
            >
              Resume
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
