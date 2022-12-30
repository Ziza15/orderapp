import { useContext } from "react";
import PageContext from "../../../store/page-context";
import classes from "./HeroSection.module.css";

const HeroSection = (props) => {
  const ctx= useContext(PageContext)
  return (
    <section>
      <div className={classes.overlay}></div>
      <div className={classes.background}></div>
      <div className={classes.centerDiv}>
        <div className={`${classes.heading}`}>
          <h1>Marko, dobrodošao</h1>
          <h3>Pogledajte meni i izaberite jelo po vašem ukusu</h3>
          <button type="button" onClick={ctx.setPage2}>
            Pogledajte ponudu
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
