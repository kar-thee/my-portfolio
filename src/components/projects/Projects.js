import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ProjectArray from "./projectArray";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <Box sx={{ py: 5, my: 5 }}>
        <Container maxWidth="xl">
          <Box>
            <Typography variant="h3" align="center">
              Projects
            </Typography>
          </Box>

          <Grid container justifyContent="center" sx={{ py: 5 }} spacing={3}>
            {ProjectArray.map((projectObj, index) => (
              <Grid item xs={11.5} sm={6} md={5} lg={4} key={index}>
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
