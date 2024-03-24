import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartDisplay from "./CartDisplay";
import EmptyCart from "./EmptyCart";
import { useContext, useState } from "react";
import AddCart from "../../store/add-cart";
import Checkout from "./Checkout";
import CompleteOrdering from "./CompleteOrdering";

const Cart = (props) => {
  const [isOrdering, setIsOrdering] = useState(false);
  const [completeOrdering, setCompleteOrdering] = useState(false);
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
  const orderingHandler = () => {
    setIsOrdering(true);
  };
  const backToCartHandler = () => {
    setIsOrdering(false);
  };

  const completeOrderingHandler = () => {
    setCompleteOrdering(true);
    ctx.resetCart();
  };
  return (
    <div className={`${classes.cart} ${props.className}`}>
      {cartItem.length > 0 && !isOrdering && !completeOrdering && cartItem}
      {cartItem.length > 0 && !isOrdering && !completeOrdering && (
        <CartDisplay
          back={ctx.resetCart}
          ordering={orderingHandler}
          titleBack="Otkaži"
          titleOrder="naruči"
        />
      )}
      {cartItem.length === 0 && !isOrdering && !completeOrdering && (
        <EmptyCart />
      )}
      {isOrdering && !completeOrdering && (
        <Checkout
          backToCart={backToCartHandler}
          completeOrdering={completeOrderingHandler}
        />
      )}
      {completeOrdering && <CompleteOrdering />}
    </div>
  );
};
export default Cart;
