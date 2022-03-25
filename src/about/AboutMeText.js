import { Box, Container, Typography } from "@mui/material";
import React from "react";

const AboutMeText = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ py: 2, my: 2 }}>
        <Typography variant="body1" sx={{ py: 1 }}>
          Hi, I am Kartheekeyan.
        </Typography>
        <Typography variant="body1" sx={{ py: 1 }}>
          I am a Computer Science Engineering Graduate of 2019. I completed
          Full-Stack [MERN] Developer BootCamp @{" "}
          <Box
            component="a"
            target="_blank"
            href="https://www.guvi.in/"
            sx={{ color: "inherit" }}
          >
            Guvi
          </Box>
          , Chennai.
        </Typography>
        <Typography variant="body1" sx={{ py: 1 }}>
          I have hands-on experience in developing Full- Stack web Applications
          with MERN stack.
        </Typography>
        <Typography variant="body1" sx={{ py: 1 }}>
          I am passionate about building web Applications and eager to learn new
          things around software Development.
        </Typography>
      </Container>
    </>
  );
};

export default AboutMeText;
