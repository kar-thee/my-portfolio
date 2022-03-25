import { Box, Container, Typography } from "@mui/material";
import React from "react";
import AboutMeText from "./AboutMeText";

const AboutMe = () => {
  return (
    <>
      <Box sx={{ py: 3, my: 3 }}>
        <Container maxWidth="xl">
          <Box>
            <Typography variant="h3" align="center">
              About Me
            </Typography>
          </Box>

          <AboutMeText />
        </Container>
      </Box>
    </>
  );
};

export default AboutMe;
