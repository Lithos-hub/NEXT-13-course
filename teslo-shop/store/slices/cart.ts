import { ICartProduct } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface initialStateInt {
  cart: ICartProduct[];
  subtotal: number;
  tax: number;
  total: number;
}

const initialState: initialStateInt = {
  cart: [],
  subtotal: 0,
  tax: 0,
  total: 0,
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addProductToCart: (state, { payload }) => {
      state.cart = [...state.cart, payload];
    },
    removeProductFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((product) => product._id !== payload._id);
    },
    updateCheckoutPrice: (state) => {
      state.subtotal = state.cart.reduce(
        (curr, acc) => curr + acc.price * acc.quantity,
        0
      );
      state.tax = state.subtotal * 0.21;
      state.total = state.subtotal + state.tax;
    },
    updateCartProduct: (state, { payload }) => {
      console.log(payload);
      state.cart = state.cart.map((product) => {
        if (product._id === payload.productId) {
          console.log("updating");
          return {
            ...product,
            quantity: payload.quantity,
          };
        } else {
          return product;
        }
      });
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  updateCheckoutPrice,
  updateCartProduct,
} = CartSlice.actions;
