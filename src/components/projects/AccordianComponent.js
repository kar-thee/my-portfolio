import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordianComponent = ({ authArray }) => {
  return (
    <>
      <Accordion sx={{ background: "#e3f2fd" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography sx={{ color: "#003399" }} variant="body1">
            Demo Credentials
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {authArray.map((authItem) => (
            <>
              <Typography>
                {authItem.roleType} -
                <ol style={{ listStyle: "none" }}>
                  <li> Email : {authItem.email}</li>
                  <li>Password : {authItem.password}</li>
                </ol>
              </Typography>
              <Divider />
            </>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordianComponent;
