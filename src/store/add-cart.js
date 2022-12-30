import React from "react";

const AddCart = React.createContext({
  cartItems: [],
  totalPrice: 0,
  resetHandler: () => {},
});

export default AddCart;
