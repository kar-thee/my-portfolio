import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import GitHubIcon from "@mui/icons-material/GitHub";

import MERNImg from "../../assets/projects/MERN.png";

const ProjectCard = ({ projectObj }) => {
  // here we object destructuring
  const {
    title,
    clientLink,
    serverLink,
    siteLink,
    authLink,
    previewImg,
    TechImg,
    headerName,
    appDesc,
  } = projectObj;

  return (
    <>
      <Card
        sx={{
          "&:hover": {
            boxShadow: "2px 2px 4px",
          },
        }}
      >
        <CardHeader
          action={
            <Stack direction="row">
              <Tooltip title="Auth Link">
                <IconButton
                  aria-label="settings"
                  sx={{ color: "#990033" }}
                  component="a"
                  href={authLink}
                  target="_blank"
                >
                  <VpnKeyIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Site Link">
                <IconButton
                  aria-label="settings"
                  sx={{ color: "#009966" }}
                  component="a"
                  href={siteLink}
                  target="_blank"
                >
                  <OpenInNewIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          }
          title={title}
        />

        <Divider />

        <Tooltip title="Site Preview">
          <CardMedia
            component="img"
            height="200"
            image={previewImg}
            alt="chatApp"
            sx={{
              objectFit: "unset",
              transform: "scale(1)",
              transition: "ease-in 0.8s",
              "&:hover": {
                transform: "scale(1.1)",
                transition: "ease-out 0.8s",
                objectFit: "unset",
              },
            }}
          />
        </Tooltip>

        <Divider />

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

        <CardActions sx={{ mx: 1 }}>
          <Tooltip title="Client repo">
            <Button
              size="small"
              endIcon={<GitHubIcon />}
              variant="outlined"
              component="a"
              href={clientLink}
              target="_blank"
            >
              Client
            </Button>
          </Tooltip>

          <Tooltip title="Server repo">
            <Button
              size="small"
              endIcon={<GitHubIcon />}
              variant="outlined"
              component="a"
              href={serverLink}
              target="_blank"
            >
              Server
            </Button>
          </Tooltip>
        </CardActions>
      </Card>
    </>
  );
};

export default ProjectCard;
