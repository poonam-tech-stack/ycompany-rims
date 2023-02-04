import { useState, useEffect } from "react";

import {
  addItemToCart,
  removeItemFromCart,
  removeCartItem,
} from "../helpers/cart";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddItemToCartEvent = ({ detail: { item: newItemToAdd } }) => {
    setCartItems(addItemToCart({ cartItems, newItemToAdd }));
  };

  const handleRemoveItemFromCartEvent = ({
    detail: { cartItem: cartItemToRemove },
  }) => {
    setCartItems(removeItemFromCart({ cartItems, cartItemToRemove }));
  };

  const handleRemoveCartItemEvent = ({ detail: { id } }) => {
    setCartItems(removeCartItem({ cartItems, id }));
  };

  useEffect(() => {
    window.addEventListener("ADD_ITEM_TO_CART", handleAddItemToCartEvent);
    window.addEventListener(
      "REMOVE_ITEM_FROM_CART",
      handleRemoveItemFromCartEvent
    );
    window.addEventListener("REMOVE_CART_ITEM", handleRemoveCartItemEvent);

    return () => {
      window.removeEventListener("ADD_ITEM_TO_CART", handleAddItemToCartEvent);
      window.removeEventListener(
        "REMOVE_ITEM_FROM_CART",
        handleRemoveItemFromCartEvent
      );
      window.removeEventListener("REMOVE_CART_ITEM", handleRemoveCartItemEvent);
    };
  });

  return { cartItems };
};

export default useCart;
