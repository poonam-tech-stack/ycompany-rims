import React from "react";
import { useLocation } from "react-router-dom";
import { Grid, Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import useProducts from "../../enhancers/useProducts";
import NoProducts from "../NoProducts.jsx";
import Product from "../Product";

const ErrorPage = React.lazy(() => import("shared/ErrorPage"));

const ProductList = () => {
  const param = useLocation().search;
  const category = new URLSearchParams(param).get("category");
  const productType = new URLSearchParams(param).get("productType");
  const { products, loading, error } = useProducts({ category, productType });

  if (loading) return <CircularProgress />;
  if (error) return <ErrorPage />;
  if (!loading && products?.length === 0) {
    return <NoProducts />;
  }

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
