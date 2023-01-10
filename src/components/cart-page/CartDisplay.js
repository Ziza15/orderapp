import { useContext, useEffect, useState } from "react";
import AddCart from "../../store/add-cart";
import classes from "./CartDisplay.module.css";

const CartDisplay = (props) => {
  const ctx = useContext(AddCart);

  

  return (
    <div className={classes.cartDisplay}>
      <div>
        <p>Ukupna cijena:</p>
        <p>{ctx.totalPrice} RSD</p>
      </div>
      <div>
        <button onClick={ctx.resetCart}>Otkaži</button>
        <button>Naruči</button>
      </div>
    </div>
  );
};
export default CartDisplay;
