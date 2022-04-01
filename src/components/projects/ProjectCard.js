import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

import MERNImg from "../../assets/projects/MERN.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
// import VpnKeyIcon from "@mui/icons-material/VpnKey";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccordianComponent from "./AccordianComponent";

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
        }}
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
          {/* here all buttons */}
          <Box>
            <CardActions
              sx={{
                mx: 1,
                justifyContent: { xs: "center", md: "space-around" },
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box sx={{ py: { xs: 2, md: "unset " } }}>
                <Tooltip title="Client repo">
                  <Button
                    size="small"
                    endIcon={<GitHubIcon />}
                    variant="contained"
                    component="a"
                    href={clientLink}
                    target="_blank"
                  >
                    Front-End
                  </Button>
                </Tooltip>
              </Box>

              <Box sx={{ py: { xs: 2, md: "unset " } }}>
                <Tooltip title="Server repo">
                  <Button
                    size="small"
                    endIcon={<GitHubIcon />}
                    variant="contained"
                    component="a"
                    href={serverLink}
                    target="_blank"
                  >
                    Back-End
                  </Button>
                </Tooltip>
              </Box>

              <Box sx={{ py: { xs: 2, md: "unset " } }}>
                <Tooltip title="Live Demo">
                  <Button
                    size="small"
                    endIcon={<OpenInNewIcon />}
                    variant="contained"
                    component="a"
                    href={siteLink}
                    target="_blank"
                  >
                    Live-Demo
                  </Button>
                </Tooltip>
              </Box>
            </CardActions>
          </Box>

          {/* here accordian */}
          <Box sx={{ m: 1 }}>
            <AccordianComponent authArray={authArray} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProjectCard;
