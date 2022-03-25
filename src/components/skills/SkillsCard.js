import { Box, Container, Grid, Paper, Tooltip } from "@mui/material";
import React from "react";

import MERNImg from "../../assets/projects/MERN.png";
import htmlCss from "../../assets/projects/htmlCss.png";
import javascript from "../../assets/projects/javascriptLogo.png";
import AWSS3 from "../../assets/projects/AWS-S3.png";
import bootstrap5 from "../../assets/projects/bootstrap5.jpg";
import materialui5 from "../../assets/projects/materialui5.png";

const SkillsCard = () => {
  return (
    <>
      <Container
        sx={{ py: 3, my: 3, background: "#e1f5fe" }}
        component={Paper}
        elevation={10}
        maxWidth="md"
      >
        <Grid container spacing={5} justifyContent="center" sx={{ mx: "auto" }}>
          <Grid item xs={8} md={6} lg={4}>
            <Box sx={{ height: "65px", objectFit: "cover" }}>
              <Tooltip title="MongoDB, Express.js, React and NodeJs">
                <img
                  src={MERNImg}
                  alt="MongoDB,Express.js,React and NodeJs"
                  height="100%"
                />
              </Tooltip>
            </Box>
          </Grid>

          <Grid item xs={8} md={6} lg={4}>
            <Box sx={{ height: "65px", objectFit: "cover" }}>
              <Tooltip title="Javascript">
                <img src={javascript} alt="Javascript" height="100%" />
              </Tooltip>
            </Box>
          </Grid>

          <Grid item xs={8} md={6} lg={4}>
            <Box
              sx={{
                height: "65px",
                objectFit: "cover",
              }}
            >
              <Tooltip title="HTML and CSS">
                <img src={htmlCss} alt="HTML and CSS" height="100%" />
              </Tooltip>
            </Box>
          </Grid>

          <Grid item xs={8} md={6} lg={4}>
            <Box sx={{ height: "65px", objectFit: "cover" }}>
              <Tooltip title="AWS S3">
                <img src={AWSS3} alt="AWS S3" height="100%" />
              </Tooltip>
            </Box>
          </Grid>

          <Grid item xs={8} md={6} lg={4}>
            <Box sx={{ height: "65px", objectFit: "cover" }}>
              <Tooltip title="Bootstrap 5">
                <img src={bootstrap5} alt="Bootstrap5" height="100%" />
              </Tooltip>
            </Box>
          </Grid>

          <Grid item xs={8} md={6} lg={4}>
            <Box sx={{ height: "65px", objectFit: "cover" }}>
              <Tooltip title="Material-ui 5 ">
                <img src={materialui5} alt="Material-ui 5" height="100%" />
              </Tooltip>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SkillsCard;
