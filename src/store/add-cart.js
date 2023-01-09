import React from "react";

const AddCart = React.createContext({
  cartItems: [],
  totalPrice: 0,
  inCart:false,
  currentIdItems: null,
  resetHandler: () => {},
  updateTotalPrice: () => {},
  removeItemHandler:()=>{}
});

export default AddCart;
