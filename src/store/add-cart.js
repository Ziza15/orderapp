import React from "react";

const AddCart = React.createContext({
  cartItems: [],
  totalPrice: 0,
  IsEmpty:false,
  addItemsToCart: ()=>{},
  resetCart:()=>{},
  updateTotalPrice: () => {},
  removeItem:()=>{}
});

export default AddCart;
