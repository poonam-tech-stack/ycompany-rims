import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Button, Typography } from "@mui/material";

const Description = ({ item }) => {
  const { name, price, description, discount } = item;
  return (
    <section>
      <Typography variant="h4" color="secondary">
        {name}
      </Typography>

      <p>{description}</p>
      <div>
        {discount ? (
          <>
            <div>
              <p>{price * discount * 0.01}</p>
              <p>{discount}</p>
            </div>
            <s>
              <CurrencyRupeeIcon />
              {price}
            </s>
          </>
        ) : (
          <p>
            <CurrencyRupeeIcon />
            {price}
          </p>
        )}
      </div>
      <Button
        variant="contained"
        size="large"
        startIcon={<ShoppingCartIcon />}
        onClick={() => {
          const event = new CustomEvent("ADD_ITEM_TO_CART", {
            detail: { item },
          });
          window.dispatchEvent(event);
        }}
      >
        Add to cart
      </Button>
    </section>
  );
};

export default Description;
