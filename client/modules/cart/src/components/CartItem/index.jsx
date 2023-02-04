import React, { useState } from "react";

import { Box, Divider, Avatar, Typography, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartItem = ({ cartItem, deleteItem }) => {
  const { image, name, description, quantity, price, _id } = cartItem;
  const [quant, setQuantity] = useState(quantity);

  const handleAddItem = () => {
    const event = new CustomEvent("ADD_ITEM_TO_CART", {
      detail: { item: cartItem },
    });
    window.dispatchEvent(event);
    setQuantity(quant + 1);
  };
  const handleRemoveItem = () => {
    const event = new CustomEvent("REMOVE_ITEM_FROM_CART", {
      detail: { cartItem },
    });
    window.dispatchEvent(event);
    if (quant === 1) {
      deleteItem({ id: _id });
    }
    setQuantity(quant - 1);
  };
  const handleRemoveCartItem = () => {
    deleteItem({ id: _id });
    const event = new CustomEvent("REMOVE_CART_ITEM", { detail: { id: _id } });
    window.dispatchEvent(event);
  };

  return (
    <>
      <Box
        sx={{ mt: 10 }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Avatar
          alt="Remy Sharp"
          src={image}
          variant="square"
          sx={{ width: 120, height: 120 }}
        />
        <Box display="flex" flexDirection="column">
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subTitle2">{description}</Typography>
        </Box>
        <Box>
          <IconButton aria-label="Increment Quantity" color="inherit">
            <AddIcon onClick={handleAddItem} />
          </IconButton>
          <Typography variant="span">{quant}</Typography>
          <IconButton
            aria-label="Decrement Quantity"
            color="inherit"
            disabled={quant === 0}
          >
            <RemoveIcon onClick={handleRemoveItem} />
          </IconButton>
        </Box>
        <Typography variant="body1" justifyContent="end">
          {price}
        </Typography>
        <IconButton aria-label="Remove item from cart" color="inherit">
          <ClearIcon onClick={handleRemoveCartItem} />
        </IconButton>
      </Box>
      <Divider variant="inset" />
    </>
  );
};

export default CartItem;
