import {
  Box,
  CardContent,
  CardMedia,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

import MERNImg from "../../assets/projects/MERN.png";
// import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AccordianComponent from "./AccordianComponent";
import ProjectButtonComponent from "./ProjectButtonComponent";

const ProjectCard = ({ projectObj }) => {
  // here we object destructuring
  const {
    // title,
    clientLink,
    serverLink,
    siteLink,
    // authLink,
    previewImg,
    TechImg,
    headerName,
    appDesc,
    authArray,
  } = projectObj;

  return (
    <>
      <Box
        sx={{
          background: "white",
          my: 4,
          py: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          "&:hover": {
            boxShadow: "2px 2px 4px",
          },
        }}
        component={Paper}
        elevation={12}
      >
        {/* for img */}
        <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          <Tooltip title="Site Preview">
            <CardMedia
              component="img"
              height="270"
              image={previewImg}
              alt="chatApp"
              sx={{
                objectFit: "unset",
                transform: "scale(1)",
                transition: "ease-out 0.8s",
                "&:hover": {
                  transform: "scale(0.94)",
                  transition: "ease-in 0.8s",
                  objectFit: "unset",
                },
              }}
            />
          </Tooltip>
        </Box>

        {/* for content */}
        <Box>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "#003399" }}
            >
              {headerName}
            </Typography>
            <Typography variant="subtitle" color="text.secondary">
              {appDesc}
            </Typography>

            <Tooltip title="Technologies used">
              <Stack
                direction="row"
                sx={{ py: 2, border: "1px solid green", mt: 1 }}
                justifyContent="space-around"
              >
                <Box sx={{ height: "45px", objectFit: "cover" }}>
                  <img src={MERNImg} alt="" height="100%" />
                </Box>
                {[...TechImg].map((techImgEachItem) => (
                  <Box
                    sx={{
                      height: "45px",
                      objectFit: "cover",
                      overflow: "hidden",
                    }}
                    key={techImgEachItem}
                  >
                    <img src={techImgEachItem} alt="sxs" height="100%" />
                  </Box>
                ))}
              </Stack>
            </Tooltip>
          </CardContent>

          {/* here all buttons for github repo and live site */}
          <Box>
            <ProjectButtonComponent
              clientLink={clientLink}
              serverLink={serverLink}
              siteLink={siteLink}
            />
          </Box>

          {/* here accordian for demoCredentials */}
          <Box sx={{ m: 1 }}>
            <AccordianComponent authArray={authArray} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProjectCard;
