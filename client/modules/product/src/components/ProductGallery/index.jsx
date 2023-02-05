import React from "react";
import { Card, CardMedia } from "@mui/material";

const ProductGallery = ({ item: { image } }) => (
  <Card
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <CardMedia component="img" image={image} alt="image" />
  </Card>
);

export default ProductGallery;
