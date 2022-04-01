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
            <Typography variant="h3" align="center">
              Projects
            </Typography>
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
