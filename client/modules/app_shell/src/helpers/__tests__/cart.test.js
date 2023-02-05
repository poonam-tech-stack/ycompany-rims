import {
  addItemToCart,
  removeItemFromCart,
  removeCartItem,
  getCartItemsCount,
} from "../cart";

describe("cart helpers", () => {
  describe("addItemToCart", () => {
    test("should add items to cart", () => {
      const cartItems = [
        {
          _id: 1,
          name: "Mock Product 1",
          price: 100,
          quantity: 1,
        },
      ];
      const newItemToAdd = {
        _id: 2,
        name: "Mock Product 2",
        price: 200,
      };
      const existingCartItem = {
        _id: 1,
        name: "Mock Product 1",
        price: 100,
      };
      expect(addItemToCart({ cartItems, newItemToAdd })).toEqual([
        ...cartItems,
        {
          _id: 2,
          name: "Mock Product 2",
          price: 200,
          quantity: 1,
        },
      ]);
      expect(
        addItemToCart({ cartItems, newItemToAdd: existingCartItem })
      ).toEqual([
        {
          _id: 1,
          name: "Mock Product 1",
          price: 100,
          quantity: 2,
        },
      ]);
    });
  });

  describe("removeItemFromCart", () => {
    test("should remove items from cart", () => {
      const cartItems = [
        {
          _id: 1,
          name: "Mock Product 1",
          price: 100,
          quantity: 2,
        },
        {
          _id: 2,
          name: "Mock Product 2",
          price: 200,
          quantity: 1,
        },
      ];
      const singleCartItemMock = [
        {
          _id: 1,
          name: "Mock Product 1",
          price: 100,
          quantity: 1,
        },
      ];
      const cartItemToRemove = {
        _id: 1,
        name: "Mock Product 1",
        price: 100,
        quantity: 2,
      };
      
      expect(removeItemFromCart({ cartItems, cartItemToRemove })).toEqual(
        [
            {
              _id: 1,
              name: "Mock Product 1",
              price: 100,
              quantity: 1,
            },
            {
              _id: 2,
              name: "Mock Product 2",
              price: 200,
              quantity: 1,
            },
          ]
      );
      expect(
        removeItemFromCart({
          cartItems: singleCartItemMock,
          cartItemToRemove: singleCartItemMock[0],
        })
      ).toEqual([]);
    });
  });

  describe("removeCartItem", () => {
    test("should remove cart item", () => {
      const cartItems = [
        {
          _id: 1,
          name: "Mock Product 1",
          price: 100,
          quantity: 2,
        },
        {
          _id: 2,
          name: "Mock Product 2",
          price: 200,
          quantity: 1,
        },
      ];
      expect(removeCartItem({ cartItems, id: 2 })).toEqual([
        {
          _id: 1,
          name: "Mock Product 1",
          price: 100,
          quantity: 2,
        },
      ]);
    });
  });

  describe("getCartItemsCount", () => {
    test("should get count of items in the cart", () => {
      const cartItems = [
        {
          _id: 1,
          name: "Mock Product 1",
          price: 100,
          quantity: 2,
        },
        {
          _id: 2,
          name: "Mock Product 2",
          price: 200,
          quantity: 2,
        },
      ];
      expect(getCartItemsCount(cartItems)).toBe(4);
    });
  });
});
