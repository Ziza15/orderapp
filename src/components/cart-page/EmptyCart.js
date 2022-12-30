import classes from "./EmptyCart.module.css";
import img from "../../assets/emptyCart.svg";
import { useContext } from "react";
import PageContext from "../../store/page-context";
const EmptyCart = () => {
  const ctx = useContext(PageContext)
  return (
    <div className={classes.emptyCart}>
      <div className={classes.emptyImg}>
        <img src={img} alt="Przna korpa"/>
      </div>
      <div>
        <p className={classes.text1}>Trenutno nemate nista u korpi!</p>
        <p className={classes.text2}>
          <span>
            <a href="#s" onClick={ctx.setPage2}>Vratite se nazad</a>
          </span>{" "}
           na meni i izaberite hranu po izboru
        </p>
      </div>
    </div>
  );
};

export default EmptyCart;
