import classes from "./EmptyCart.module.css";
import img from "../../assets/emptyCart.svg";
import { useContext } from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className={classes.emptyCart}>
      <div className={classes.emptyImg}>
        <img src={img} alt="Przna korpa"/>
      </div>
      <div>
        <p className={classes.text1}>Trenutno nemate nista u korpi!</p>
        <p className={classes.text2}>
          <span>
            <Link to="/meni" >Vratite se nazad</Link>
          </span>{" "}
           na meni i izaberite hranu po izboru
        </p>
      </div>
    </div>
  );
};

export default EmptyCart;
