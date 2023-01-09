import { useContext, useState } from "react";
import AddCart from "../../store/add-cart";
import classes from "./CartItem.module.css";
const CartItem = (props) => {
  const ctx = useContext(AddCart);
  const [amount, setAmount] = useState(props.amount);
  
  const incrementAmountHandler = () => {
    ctx.cartItems?.forEach((item) => {
      if (props.id === item.id) {
        const updIdArray = ctx.cartItems.findIndex((obj) => obj.id === item.id);
        setAmount((ctx.cartItems[updIdArray].amount += 1));
        ctx.updateTotalPrice();
        console.log(ctx.totalPrice);
      }
    });
  };
  const decrementAmount = () => {
    ctx.cartItems?.forEach((item) => {
      const updIdArray = ctx.cartItems.findIndex((obj) => obj.id === item.id);
      if (props.id === item.id) {
        if (ctx.cartItems[updIdArray].amount > 1) {
          setAmount((ctx.cartItems[updIdArray].amount -= 1));
          ctx.updateTotalPrice();
          console.log(ctx.totalPrice);
        }
      }
    });
  };
  ctx.currentIdItems = props.id
  // ctx.removeItemHandler =()=>{
   
  //   ctx.cartItems.forEach((item) => {
  //     if(props.id === item.id){
  //       const id = ctx.cartItems.filter((idItem) => idItem.id !== item.id);
  //       ctx.cartItems =id
  //       console.log(ctx.cartItems)

  //     }
  //   });
  // }
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
          <button onClick={incrementAmountHandler}>
            <span>+</span>
          </button>
          <p className={classes.multiply}>x</p>
        </div>
        <div>
          <p>{props.price} RSD</p>
        </div>
        <div>
          <button onClick={ctx.removeItemHandler} >X</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
