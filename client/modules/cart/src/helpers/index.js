export const getTotalCartPrice = (cartItems) => {
  return cartItems?.reduce((sum, { price, quantity }) => {
    return price * quantity + sum;
  }, 0);
};
