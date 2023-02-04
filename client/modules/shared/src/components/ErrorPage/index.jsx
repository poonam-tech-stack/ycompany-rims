import React from "react";
import { Typography, Box } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

const ErrorPage = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
  >
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <ErrorIcon color="error" sx={{ m: 1 }} />
      <Typography variant="h5">OOPS! Something went wrong.</Typography>
    </Box>
    <Typography variant="h6">Please try again later.</Typography>
  </Box>
);

export default ErrorPage;
