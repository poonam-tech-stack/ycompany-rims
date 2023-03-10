import React from "react";
import { Box, Typography } from "@mui/material";

import { getTotalCartPrice } from "../../helpers";

const CartTotal = ({ cartItems }) => {
  const total = getTotalCartPrice(cartItems);

  return (
    <Box display="flex" justifyContent="end">
      <Typography variant="h6">Total - {total}</Typography>
    </Box>
  );
};

export default CartTotal;
