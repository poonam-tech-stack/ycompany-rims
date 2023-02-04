import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Container } from "@mui/material";

import CartItem from "../CartItem";
import CartTotal from "../CartTotal";

const CartDetails = () => {
  const {
    state: { cartItems: cartItemState },
  } = useLocation();
  const [cartItems, setCartItems] = useState(cartItemState);

  const deleteItem = ({ id }) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  return (
    <Box sx={{ m: 4 }}>
      <Container>
        <Typography variant="h4" color="secondary">
          Shopping Cart
        </Typography>
        {cartItems.map((cartItem) => {
          return (
            <CartItem
              key={cartItem._id}
              cartItem={cartItem}
              deleteItem={deleteItem}
            />
          );
        })}
        <CartTotal cartItems={cartItems} />
      </Container>
    </Box>
  );
};

export default CartDetails;
