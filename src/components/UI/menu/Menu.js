import classes from "./Menu.module.css";
import cart from "../../../assets/cart.svg";
import inCartImg from "../../../assets/inCart.svg";
import logOut from "../../../assets/logout.svg";
import { useContext, useEffect, useState } from "react";
import AddCart from "../../../store/add-cart";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../store/AuthContext";

const Menu = () => {
  const [error, setError] = useState("")
  const {logout} = useAuth()
  const ctxCart = useContext(AddCart);
  const navigate = useNavigate()
  const logOutHandler = async()=>{
    setError("")
    try {
      await logout()
      navigate("/signin")
    } catch  {
      setError("Greska pri odjavljivanju")
      console.log(error)
    }
  }
  return (
    <section className={classes.menu}>
      <ul className={classes.navList}>
        <li>
          <Link to="/">Početna</Link>
        </li>
        <li>
          <Link to="/meni">Meni</Link>
        </li>
        <li>
          <a href="#s">Narudžbe</a>
        </li>
        {!ctxCart.IsEmpty && (
          <li>
            <Link to="/cart">
              <img src={cart} alt="Korpa je prazna" />
            </Link>
          </li>
        )}
        {ctxCart.IsEmpty && (
          <li>
            <Link to="/cart">
              <img src={inCartImg} alt="Korpa nije prazna" />
            </Link>
          </li>
        )}
     
          <li>
            <a>
              <img src={logOut} alt="Odjavi se" onClick={logOutHandler}/>
            </a>
          </li>

      </ul>
    </section>
  );
};

export default Menu;
