import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartDisplay from "./CartDisplay";
import EmptyCart from "./EmptyCart";
import { useContext, useEffect, useState } from "react";
import AddCart from "../../store/add-cart";

const Cart = (props) => {
  const [price, setPrice] = useState();
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
  let totalPrice = 0;
  ctx.cartItems.map((item) => {
    return (totalPrice = totalPrice + item.price * item.amount);
  });
  ctx.totalPrice = totalPrice;
  useEffect(() => {
    setPrice(ctx.totalPrice);
  }, [ctx.totalPrice]);
  ctx.resetHandler=()=>{
    setPrice(ctx.totalPrice=0);
    ctx.cartItems.length=0;
  }
  // const resetHandler = () => {
    
  // };
  return (
    <div className={`${classes.cart} ${props.className}`}>
      {cartItem.length > 0 && cartItem}
      {cartItem.length > 0 && (
        <CartDisplay totalPrice={price} />
      )}
      {cartItem.length === 0 && <EmptyCart />}
    </div>
  );
};

export default Cart;
