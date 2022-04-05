import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectArray from "./projectArray";

const Projects = () => {
  return (
    <>
      <Box sx={{ py: 5, my: 5 }}>
        <Container maxWidth="md">
          <Box>
            <Typography variant="h3" align="center" sx={{ mb: 3 }}>
              Projects
            </Typography>

            {/* primary Credentials */}
            <Box sx={{ py: 3, border: "1px solid #996600", px: 3 }}>
              <Typography>
                <span style={{ fontSize: "larger" }}>Credentials</span> -
                <li style={{ listStyle: "none" }}>
                  <ol>
                    {" "}
                    <span style={{ fontSize: "large" }}>Email</span> :
                    ourworldourpeople@gmail.com
                  </ol>
                  <ol>
                    <span style={{ fontSize: "large" }}>Password</span> :
                    Password1@
                  </ol>
                </li>
              </Typography>
            </Box>
          </Box>

          <Grid container justifyContent="center" sx={{ py: 5 }} spacing={4}>
            {ProjectArray.map((projectObj, index) => (
              <Grid item xs={12} sm={9.5} md={12} lg={12} key={index}>
                <ProjectCard projectObj={projectObj} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Projects;
