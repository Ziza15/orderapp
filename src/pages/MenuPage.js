import React from "react";
import LoadedMenu from "../components/menu-page/curentlyMenu/LoadedMenu";
import Footer from "../components/UI/footer/Footer";
import Menu from "../components/UI/menu/Menu";
import PageHeroSection from "../components/UI/PageHeroSection/PageHeroSection";
import classes from './Container.module.css'
import img from "../assets/meni.jpg"

const MenuPage = () => {
  return (
    <React.Fragment>
      <Menu />
      <PageHeroSection title={"Meni"} img={img}/>
      <LoadedMenu className={classes.container}/>
      <Footer className={classes.container}/>
    </React.Fragment>
  );
};
export default MenuPage;
