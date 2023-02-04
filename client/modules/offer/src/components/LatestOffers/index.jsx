import React from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { OFFERS, BANNERS } from "../../config";
import Corousel from "../Corousel";

import { appTheme } from "shared/AppTheme";

const LatestOffers = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Corousel data={OFFERS} />
      <Corousel data={BANNERS} isDefaultHeight />
    </ThemeProvider>
  );
};
export default LatestOffers;
