import React from "react";
import { useLocation } from "react-router-dom";
import {Box, Grid, Container} from '@mui/material';

import ProductGallery from "../ProductGallery";
import Description from "../Description";

const ProductDetails = () => {
  const { state: item } = useLocation();

  return (
    <section>
      <Box sx={{ flexGrow: 1}}>
      <Container sx={{ py: 6 }}>
        <Grid container spacing={{ xs: 1, md: 25 }}>
          <Grid item xs={12} md={6}>
            <ProductGallery item={item} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Description item={item} />
          </Grid>
        </Grid>
       </Container>
      </Box>
    </section>
  );
};

export default ProductDetails;
