import { Box, Button, CardActions, Tooltip } from "@mui/material";
import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ProjectButtonComponent = ({ clientLink, serverLink, siteLink }) => {
  return (
    <>
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
    </>
  );
};

export default ProjectButtonComponent;
