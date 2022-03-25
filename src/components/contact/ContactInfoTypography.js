import { Typography } from "@mui/material";
import React from "react";

const ContactInfoTypography = ({ contactInfo, siteLink }) => {
  return (
    <>
      {siteLink ? (
        <>
          <Typography
            variant="h6"
            sx={{
              transition: " .9s ease-out",
              textDecoration: "none",
              color: "inherit",
              "&:hover": {
                transform: "scale(1.1)",
                transition: " .7s ease-in",
              },
            }}
            component="a"
            target="_blank"
            href={siteLink}
          >
            {contactInfo}
          </Typography>
        </>
      ) : (
        <>
          <Typography
            variant="h6"
            sx={{
              transition: " .9s ease-out",

              "&:hover": {
                transform: "scale(1.1)",
                transition: " .7s ease-in",
              },
            }}
          >
            {contactInfo}
          </Typography>
        </>
      )}
    </>
  );
};

export default ContactInfoTypography;
