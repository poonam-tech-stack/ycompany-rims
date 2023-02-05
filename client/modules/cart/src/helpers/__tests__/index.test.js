import { getTotalCartPrice } from "../index";

describe("getTotalCartPrice", () => {
  test("should return sum of all the cart items", () => {
    const cartItems = [
      { name: "item1", price: 100, quantity: 2 },
      { name: "item2", price: 300, quantity: 1 },
    ];

    expect(getTotalCartPrice(cartItems)).toEqual(500);
  });
});
