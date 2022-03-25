import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

import FilePresentIcon from "@mui/icons-material/FilePresent";
import MyLinks from "./MyLinks";
import Name from "./Name";
import Profile from "./Profile";

const HomePage = () => {
  return (
    <>
      <Container sx={{ pb: 2 }}>
        <Grid
          container
          justifyContent="center"
          sx={{ py: 5, alignItems: "center" }}
          spacing={1}
        >
          <Grid item sx={{ mt: 2, pt: 2 }} xs={12} sm={12} md={12} lg={12}>
            <Name />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Profile />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{ my: 2, py: 2 }}>
            <MyLinks />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
