import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box sx={{ py: 5, my: 5 }}>
        <Container maxWidth="xs">
          <Box sx={{ transform: "scale(1.2)" }}>
            <Typography
              variant="subtitle"
              sx={{
                color: "#996600",
                fontFamily: `"Vujahday Script", cursive`,
                fontSize: { xs: "small", md: "larger" },
                ml: { xs: 5, md: 1 },
              }}
            >
              Designed and Developed by{" "}
              <Box
                target="_blank"
                href="https://kartheekeyan.com"
                component="a"
                sx={{
                  textDecoration: "underline",
                  color: "inherit",
                }}
              >
                Kartheekeyan
              </Box>{" "}
              .S
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
