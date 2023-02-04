export const addItemToCart = ({ cartItems, newItemToAdd }) => {
  const isCartItemPresent = cartItems.find(
    (cartItem) => cartItem._id === newItemToAdd._id
  );

  if (isCartItemPresent) {
    return cartItems.map((item) =>
      item._id === newItemToAdd._id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...newItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = ({ cartItems, cartItemToRemove }) => {
  const { id, quantity } = cartItemToRemove;
  if (quantity === 1) {
    return removeCartItem({ cartItems, id });
  }
  return cartItems.map((item) =>
    item._id === cartItemToRemove._id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const removeCartItem = ({ cartItems, id }) => {
  return cartItems.filter(({ _id }) => _id !== id);
};

export const getCartItemsCount = (cartItems) =>
  cartItems.reduce((accumulator, { quantity }) => accumulator + quantity, 0);
