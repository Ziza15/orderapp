import React from "react";
import Footer from "../components/UI/footer/Footer";
import Menu from "../components/UI/menu/Menu";
import PageHeroSection from "../components/UI/PageHeroSection/PageHeroSection";
import classes from "./Container.module.css";
import img from "../assets/korpa.jpg"
import Cart from "../components/cart-page/Cart";

const CartPage = () => {
  return (
    <React.Fragment>
      <Menu />
      <PageHeroSection title={"Korpa"} img={img}/>
      <Cart className={classes.container}  />
      <Footer className={classes.container} />
    </React.Fragment>
  );
};

export default CartPage;
