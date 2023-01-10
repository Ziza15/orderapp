import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartDisplay from "./CartDisplay";
import EmptyCart from "./EmptyCart";
import { useCallback, useContext, useEffect, useState } from "react";
import AddCart from "../../store/add-cart";

const Cart = (props) => {
   const ctx = useContext(AddCart);
  let cartItem = ctx.cartItems.map((item) => {
    return (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
      />
    );
  });
  
  return (
    <div className={`${classes.cart} ${props.className}`}>
       {cartItem.length > 0 && cartItem}
       {cartItem.length > 0 && <CartDisplay />}
       {cartItem.length === 0 && <EmptyCart />}  
    </div>
  );
};

export default Cart;
