import React from "react";
import HeroSection from "../components/home-page/hero-section/HeroSection";
import CardSection from "../components/home-page/section-1/CardSection";
import Section2 from "../components/home-page/section-2/Section2";
import Section3 from "../components/home-page/section-3/Section3";
import Footer from "../components/UI/footer/Footer";
import Menu from "../components/UI/menu/Menu";
import classes from './Container.module.css'
const HomePage = ()=>{
    return (
        <React.Fragment>
          <Menu/>
          <HeroSection/>
          <CardSection className={classes.container}/>
          <Section2/>
          <Section3 className={classes.container}/>
          <Footer className={classes.container}/>
        </React.Fragment>
      );
}

export default HomePage;