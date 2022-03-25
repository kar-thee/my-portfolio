import { Avatar, Box, Button, IconButton, Stack } from "@mui/material";
import React from "react";

import FilePresentIcon from "@mui/icons-material/FilePresent";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const MyLinks = () => {
  return (
    <>
      <Stack direction="row" alignItems="center">
        <Box>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/kartheekeyan-s"
            target="_blank"
          >
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
              <LinkedInIcon />
            </Avatar>
          </IconButton>
        </Box>

        <Box>
          <IconButton
            component="a"
            href="https://github.com/kar-thee"
            target="_blank"
          >
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
              <GitHubIcon />
            </Avatar>
          </IconButton>
        </Box>

        <Box>
          <Button
            variant="contained"
            component="a"
            href="https://drive.google.com/file/d/1gg5DIBwvW3B87oHVYz79TCQH5QXitwXX/view"
            target="_blank"
            size="large"
            sx={{
              background: "#996600",
              transition: " .7s ease-out",
              ml: 2,
              "&:hover": {
                background: "#009966",
                color: "#991900",
                transform: "scale(1.1)",
                px: { xs: 2, md: 5 },
                ml: 3,
                transition: " .7s ease-in",
              },
            }}
            endIcon={<FilePresentIcon />}
          >
            My Resume
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default MyLinks;
