import React from "react";
import { useParams } from "react-router-dom";
import { Grid, Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import Product from "../Product";
import useProducts from "../../enhancers/useProducts";

const ErrorPage = React.lazy(() => import("shared/ErrorPage"));

const ProductSearch = () => {
  const { searchTerm } = useParams();
  const { products, loading, error } = useProducts({ searchTerm });

  if (loading) return <CircularProgress />;
  if (error) return <ErrorPage />;

  return (
    <main>
      <section>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </Grid>
      </Container>
      </section>
    </main>
  );
};

export default ProductSearch;
