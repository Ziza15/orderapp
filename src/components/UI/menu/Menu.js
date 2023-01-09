import classes from "./Menu.module.css";
import cart from "../../../assets/cart.svg";
import inCartImg from "../../../assets/inCart.svg";

import { useContext, useEffect, useState } from "react";
import PageContext from "../../../store/page-context";
import AddCart from "../../../store/add-cart";
const Menu = () => {
  // const [inCart, setInCart] = useState(false);
  // const ctx = useContext(PageContext);
  // const ctxCart = useContext(AddCart);
  // const [inCart, setCart] = useState(ctxCart.inCart);
  // useEffect(() => {
  //   if (ctxCart.inCart === true) {
  //     setInCart(true);
  //     console.log("promjena u korpi");
  //   } else if (ctxCart.inCart === false) {
  //     setInCart(false);
  //     console.log("praznakorpi");
  //   }
  // }, [ctxCart.inCart]);

  // useEffect(()=>{},[inCart])
  // console.log("inCart: "+inCart)

  const [inCart, setInCart] = useState(false);
  const ctx = useContext(PageContext);
  const ctxCart = useContext(AddCart);

  useEffect(() => {
    if (ctxCart.cartItems.length !== 0) {
      setInCart(true);
    } else if (ctxCart.cartItems.length === 0) {
      setInCart(false);
    }
  }, [ctxCart.cartItems, inCart]);
  return (
    <section className={classes.menu}>
      <ul className={classes.navList}>
        <li>
          <a href="#s" onClick={ctx.setPage1}>
            Početna
          </a>
        </li>
        <li>
          <a href="#s" onClick={ctx.setPage2}>
            Meni
          </a>
        </li>
        <li>
          <a href="#s">Narudžbe</a>
        </li>
        {!inCart && (
          <li>
            <a href="#s" onClick={ctx.setPage4}>
              <img src={cart} alt="Korpa je prazna" />
            </a>
          </li>
        )}
        {inCart && (
          <li>
            <a href="#s" onClick={ctx.setPage4}>
              <img src={inCartImg} alt="Korpa nije prazna" />
            </a>
          </li>
        )}
      </ul>
    </section>
  );
};

export default Menu;
