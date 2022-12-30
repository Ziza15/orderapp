import { useContext, useState } from "react";
import AddCart from "../../store/add-cart";
import classes from "./CartItem.module.css";
const CartItem = (props) => {
  const ctx = useContext(AddCart);
  const [amount, setAmount] = useState(props.amount);

  const incrementAmount = () => {
    ctx.cartItems.map((item) => {
      if (props.id === item.id) {
        const updIdArray = ctx.cartItems.findIndex((obj) => obj.id === item.id);
        setAmount(ctx.cartItems[updIdArray].amount += 1)
        
      }
    });
  };
  const decrementAmount = () => {
    ctx.cartItems.map((item) => {
      if (props.id === item.id) {
        const updIdArray = ctx.cartItems.findIndex((obj) => obj.id === item.id);
        setAmount(ctx.cartItems[updIdArray].amount -= 1)
      }
    });
  };

  return (
    <div className={classes.cartItem}>
      <div>
        <p>{props.name}</p>
      </div>
      <div>
        <div>
          <button onClick={decrementAmount}>
            <span>-</span>
          </button>
          <p className={classes.amount}>{amount}</p>
          <button onClick={incrementAmount}>
            <span>+</span>
          </button>
          <p className={classes.multiply}>x</p>
        </div>
        <div>
          <p>{props.price} RSD</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
