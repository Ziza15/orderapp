import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartDisplay from "./CartDisplay";
import EmptyCart from "./EmptyCart";
import { useCallback, useContext, useEffect, useState } from "react";
import AddCart from "../../store/add-cart";

const Cart = (props) => {
  const [price, setPrice] = useState();
  const ctx = useContext(AddCart);
  // const [inCart, setCart] = useState();
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
  let totalPrice = 0;
  ctx.cartItems.map((item) => {
    return (totalPrice = totalPrice + item.price * item.amount);
  });
  ctx.totalPrice = totalPrice;
  useEffect(() => {
    setPrice(ctx.totalPrice);
  }, [ctx.totalPrice]);

  ctx.updateTotalPrice = () => {
    ctx.cartItems.map((item) => {
      return (totalPrice = totalPrice + item.price * item.amount);
    });
    ctx.totalPrice = totalPrice;
    setPrice(ctx.totalPrice);
  };

  ctx.resetHandler = () => {
    setPrice((ctx.totalPrice = 0));
    ctx.cartItems.length = 0;
    ctx.inCart = false;
  };
  ctx.removeItemHandler = () => {
    ctx.cartItems.forEach((item) => {
      if (ctx.currentIdItems === item.id) {
        const id= ctx.cartItems.filter((idItem) => idItem.id !== item.id);
         ctx.cartItems =[...id]
        // console.log(ctx.currentIdItems);
        // delete ctx.cartItems[ctx.currentIdItems].id;
         console.log(ctx.cartItems);
      }
    });
  };
  // console.log("Korpa je "+ctx.inCart)
  return (
    <div className={`${classes.cart} ${props.className}`}>
      {cartItem.length > 0 && cartItem}
      {cartItem.length > 0 && <CartDisplay totalPrice={price} />}
      {cartItem.length === 0 && <EmptyCart />}
    </div>
  );
};

export default Cart;
