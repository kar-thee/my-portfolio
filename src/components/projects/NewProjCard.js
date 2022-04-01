import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import GitHubIcon from "@mui/icons-material/GitHub";

import MERNImg from "../../assets/projects/MERN.png";

const NewProjCard = ({ projectObj }) => {
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
        <CardHeader action={<Stack direction="row"></Stack>} title={title} />

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

        <Grid container sx={{ mx: 1 }}>
          <Grid item xs={6} md={6} lg={4} sx={{ my: 1 }}>
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
          </Grid>
          <Grid item xs={6} md={6} lg={4} sx={{ my: 1 }}>
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
          </Grid>
          <Grid item xs={6} md={6} lg={4} sx={{ my: 1 }}>
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
          </Grid>

          <Grid item xs={6} md={6} lg={4} sx={{ my: 1 }}>
            <Tooltip title="Auth Link">
              <Button
                size="small"
                endIcon={<VpnKeyIcon />}
                variant="contained"
                component="a"
                href={authLink}
                target="_blank"
              >
                Credentials
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default NewProjCard;
