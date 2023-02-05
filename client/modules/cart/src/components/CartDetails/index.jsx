import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Container } from "@mui/material";

import CartItem from "../CartItem";
import CartTotal from "../CartTotal";

const CartDetails = () => {
  const cartItemState = useLocation().state?.cartItems;

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
        {cartItems?.map((cartItem) => {
          return (
            <CartItem
              key={cartItem._id}
              cartItem={cartItem}
              deleteItem={deleteItem}
            />
          );
        })}
        {cartItems && cartItems.length > 0 && (
          <CartTotal cartItems={cartItems} />
        )}
      </Container>
    </Box>
  );
};

export default CartDetails;
