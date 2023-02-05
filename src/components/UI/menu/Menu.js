import classes from "./Menu.module.css";
import cart from "../../../assets/cart.svg";
import inCartImg from "../../../assets/inCart.svg";
import logOut from "../../../assets/logout.svg";
import { useContext, useState } from "react";
import AddCart from "../../../store/add-cart";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../store/AuthContext";
import ModalLogOut from "../modalLogOut/ModalLogOut";
import logo from "../../../assets/LogoSmall.svg"
const Menu = () => {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const [modalIsShowing, setModalIsShowing] = useState(false);
  const ctxCart = useContext(AddCart);
  const navigate = useNavigate();
  const onLogOutHandler = async () => {
    setError("");
    try {
      await logout();
      navigate("/signin");
      ctxCart.resetCart();
    } catch {
      setError("Greska pri odjavljivanju");
      console.log(error);
    }
  };

  const onShowModalHandler = () => {
    setModalIsShowing(true);
  };
  const onHideModalHandler = () => {
    setModalIsShowing(false);
  };
  return (
    <section className={classes.menu}>
      {modalIsShowing && (
        <ModalLogOut
          onHideModal={onHideModalHandler}
          LogOutHandler={onLogOutHandler}
        />
      )}
      <div className={classes.logo}>
        <Link to="/">
        <img src={logo} alt="logo"/>
        </Link>
      </div>
      <ul className={classes.navList}>
        <li>
          <Link to="/">Početna</Link>
        </li>
        <li>
          <Link to="/meni">Meni</Link>
        </li>
        <li>
          <Link to="/narudzbe">Narudžbe</Link>
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
          <div>
            <img src={logOut} alt="Odjavi se" onClick={onShowModalHandler} />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Menu;
