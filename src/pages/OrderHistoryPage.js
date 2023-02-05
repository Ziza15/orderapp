import React from "react";
import Footer from "../components/UI/footer/Footer";
import Menu from "../components/UI/menu/Menu";
import PageHeroSection from "../components/UI/PageHeroSection/PageHeroSection";
import classes from './Container.module.css'
import img from "../assets/narudzbe.jpg"
import OrederHistory from "../components/order-history/OrderHistory";

const OrderHistoryPage = () => {
  return (
    <React.Fragment>
      <Menu />
      <PageHeroSection title={"Istorija poruzdžbina"} img={img}/>
      <OrederHistory className={classes.container}/>
      <Footer className={classes.container}/>
    </React.Fragment>
  );
};
export default OrderHistoryPage;