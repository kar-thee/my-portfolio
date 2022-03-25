import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

import SendMessageApiCall from "../../api/SendMessageApiCall";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = ({ handleChangeFeedback }) => {
  const [loadingState, setLoadingState] = useState(false);

  const sendMessage = async (stateValue) => {
    setLoadingState(true);
    const response = await SendMessageApiCall(stateValue);
    setLoadingState(false);
    if (response.data.type === "success") {
      handleChangeFeedback();
    }
  };

  return (
    <>
      <Box sx={{ py: 5, my: 5 }}>
        <Container maxWidth="xl">
          <Box>
            <Typography variant="h3" align="center">
              Contact
            </Typography>
          </Box>

          <Grid container justifyContent="center" sx={{ py: 5 }} spacing={4}>
            <Grid item xs={11.5} sm={6} md={5} lg={5}>
              {/* here contact form */}
              <ContactForm
                sendMessage={sendMessage}
                loadingState={loadingState}
              />
            </Grid>
            <Grid item xs={11.5} sm={6} md={5} lg={5}>
              {/* here comes all modes of contact */}
              <ContactInfo />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
