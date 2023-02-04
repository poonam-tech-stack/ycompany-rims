import React from "react";
import {Box, Grid, Card, CardMedia} from '@mui/material';

const ProductGallery = ({ item: { image } }) => (
  /*<section className="gallery-holder ">
    <section className="gallery">
      <div className="image">
        <img src={image} alt="product-1" />
      </div>
    </section>
  </section>*/
  <Card sx={{
    height: "100%",
    display: "flex",
    flexDirection: "column",
  }}>
            <CardMedia
            component="img"
              image={image}
              alt="image"
            />
          </Card>

);

export default ProductGallery;
