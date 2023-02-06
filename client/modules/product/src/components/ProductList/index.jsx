import React from "react";
import { useLocation } from "react-router-dom";
import { Grid, Container } from "@mui/material";
import { LinearProgress, Box } from "@mui/material";

import useProducts from "../../enhancers/useProducts";
import Product from "../Product";

const ErrorPage = React.lazy(() => import("shared/ErrorPage"));

const ProductList = () => {
  const param = useLocation().search;
  const category = new URLSearchParams(param).get("category");
  const productType = new URLSearchParams(param).get("productType");
  const { products, loading, error } = useProducts({ category, productType });

  if (loading)
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  if (error) return <ErrorPage />;

  return (
    <main>
      <section>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </Grid>
        </Container>
      </section>
    </main>
  );
};

export default ProductList;
