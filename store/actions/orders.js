import { ADD_ORDER } from "../types";

export const addOrder = (cartItems, totalAmount) => {
  return {
    type: ADD_ORDER,
    payload: {
      items: cartItems,
      total: totalAmount,
    },
  };
};
