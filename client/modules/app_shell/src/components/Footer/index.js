import React from "react";
import {Box, Container, Grid, Typography} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styled from '@emotion/styled'


const Footer = () => {
  const theme = useTheme();
  return (
    <StyledFooter>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: theme.palette.footerBgColor.main,
          paddingTop: "1rem",
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="column" alignItems="center">
            <aside>
            <Grid item xs={12}>
              <Typography color="black" variant="h5">
                We Care
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary" variant="subtitle1">
                ASSURED QUALITY | 100% HANDPICKED
              </Typography>
            </Grid>
            </aside>
          </Grid>
        </Container>
      </Box>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer({
  marginTop: 'auto'
})

export default Footer;
