import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const appTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#673ab7",
      },
      header: {
        main: "#f6f4ff",
      },
      secondary: {
        main: "#9c27b0",
      },
      link: {
        main: "#757575",
      },
      button: {
        main: "#673ab7",
      },
      footerBgColor: {
        main: "#bdbdbd"
      }
    },
    backgroundLightBlue: "#b3e5fc",
    letterSpacing: ".3rem",
  })
);

export { appTheme };
