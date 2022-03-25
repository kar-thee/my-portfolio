import { Box, Button, Paper, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const ContactForm = ({ sendMessage, loadingState }) => {
  const [state, setState] = useState({ name: "", email: "", message: "" });

  const changeHandler = (ev) => {
    setState((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleSubmit = () => {
    const { name, email, message } = state;
    if (!name || !email || !message) {
      return;
    } else {
      sendMessage(state);
      setState({ name: "", email: "", message: "" });
    }
  };
  return (
    <>
      <Box
        sx={{ py: 1, background: "#e1f5fe", mr: 1 }}
        component={Paper}
        elevation={10}
      >
        <Stack component="form" justifyContent="center">
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            sx={{ mx: { xs: 3, md: 5 }, my: 2 }}
            value={state.name}
            onChange={changeHandler}
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            sx={{ mx: { xs: 3, md: 5 }, my: 2 }}
            value={state.email}
            onChange={changeHandler}
          />
          <TextField
            label="Message"
            name="message"
            variant="outlined"
            minRows={6}
            multiline
            sx={{ mx: { xs: 3, md: 5 }, my: 2 }}
            value={state.message}
            onChange={changeHandler}
          />

          <Button
            sx={
              loadingState
                ? {
                    mx: { xs: 3, md: 5 },
                    my: 2,
                    background: "#009966",
                    color: "#991900",
                    transform: "scale(1.1)",
                    px: { xs: 2, md: 5 },
                    transition: " .7s ease-in",
                  }
                : {
                    background: "#996600",
                    transition: " .7s ease-out",
                    mx: { xs: 3, md: 5 },
                    my: 2,
                    "&:hover": {
                      background: "#009966",
                      color: "#991900",
                      transform: "scale(1.1)",
                      px: { xs: 2, md: 5 },
                      transition: " .7s ease-in",
                    },
                  }
            }
            variant="contained"
            onClick={handleSubmit}
          >
            {loadingState ? "Sending Message..." : "Send Message"}
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default ContactForm;
