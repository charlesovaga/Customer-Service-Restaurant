export const addDecimals = (num) => {
  return Math.round(num * 100) / 100;
};

export const updateCart = (state) => {
  state.itemsPrice = addDecimals(
    state.cartItems.reduce(
      (acc, item) => acc + (item.price * 100 * item.qty) / 100,
      0
    )
  );

  // Calculate the shipping price
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

  state.totalPrice = Number(state.itemsPrice) + Number(state.shippingPrice);
  // Calculate the total price

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
