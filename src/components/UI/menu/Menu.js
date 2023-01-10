import classes from "./Menu.module.css";
import cart from "../../../assets/cart.svg";
import inCartImg from "../../../assets/inCart.svg";

import { useContext, useEffect, useState } from "react";
import PageContext from "../../../store/page-context";
import AddCart from "../../../store/add-cart";
const Menu = () => {

  const ctx = useContext(PageContext);
  const ctxCart = useContext(AddCart);


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
        {!ctxCart.IsEmpty && (
          <li>
            <a href="#s" onClick={ctx.setPage4}>
              <img src={cart} alt="Korpa je prazna" />
            </a>
          </li>
        )}
        {ctxCart.IsEmpty && (
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
