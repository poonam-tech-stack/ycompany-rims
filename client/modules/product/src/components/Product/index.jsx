import React from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const Product = ({ product: { _id, name, price, description, image } }) => {
  const history = useHistory();
  return (
      <Grid item key={name} xs={12} sm={6} md={4}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
          }}
          onClick={() => {
            history.push({
              pathname: `/shop/details/${_id}`,
              state: { _id, name, price, description, image },
            });
          }}
        >
          <article>
          <CardMedia component="img" image={image} alt={name} />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h6">
              {name}
            </Typography>
            <Typography>Price : {price}</Typography>
          </CardContent>
          </article>
        </Card>
      </Grid>
  );
};
export default Product;
