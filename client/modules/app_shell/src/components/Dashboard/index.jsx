import React from "react";
import { useHistory } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Typography,
  Grid,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";

import { SECTIONS } from "../../constants";

const Dashboard = () => {
  const history = useHistory();
  const theme = useTheme();
  
  return (
    <Box sx={{ pb: "20px", backgroundColor: theme.backgroundLightBlue }}>
      <Container maxWidth={false}>
        <Typography variant="h3" gutterBottom>
          BEST BUYS
        </Typography>
        <Grid container spacing={4}>
          {SECTIONS.map(({ id, imageUrl, linkUrl, title }) => (
            <Grid
              key={id}
              item
              xs={12}
              sm={6}
              md={4}
              onClick={() => {
                history.push(linkUrl);
              }}
            >
              <Card
                raised
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardActionArea>
                  <CardMedia component="img" height="500" image={imageUrl} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
