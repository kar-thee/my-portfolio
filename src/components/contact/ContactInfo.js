import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import ContactInfoButton from "./ContactInfoButton";
import ContactInfoTypography from "./ContactInfoTypography";

const ContactInfo = () => {
  return (
    <>
      <Box>
        <Stack spacing={5} justifyContent="center" sx={{ my: 5 }}>
          <Box>
            <Stack direction="row" alignItems="center" spacing={3}>
              <ContactInfoButton svgItem={<PhoneIcon />} />
              <ContactInfoTypography contactInfo="+91 9487458697" />
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" alignItems="center" spacing={3}>
              <ContactInfoButton svgItem={<EmailIcon />} />
              <ContactInfoTypography
                contactInfo="fsdkartheek@gmail.com"
                siteLink="mailto:fsdkartheek@gmail.com"
              />
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" alignItems="center" spacing={3}>
              <ContactInfoButton svgItem={<GitHubIcon />} />
              <ContactInfoTypography
                contactInfo="kar-thee"
                siteLink="https://github.com/kar-thee"
              />
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" alignItems="center" spacing={3}>
              <ContactInfoButton svgItem={<LinkedInIcon />} />
              <ContactInfoTypography
                contactInfo="kartheekeyan-s"
                siteLink="https://www.linkedin.com/in/kartheekeyan-s"
              />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default ContactInfo;
