import classes from "./Footer.module.css";
import logo from "../../../assets/LogoFooter.svg";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <section className={classes.footer}>
      <div className={props.className}>
        <div className={classes.row}>
          <div className={classes.col}>
            <div>
              <img src={logo} alt={"logo"} />
            </div>
          </div>
          <div className={classes.col}>
            <ul>
              <li>
                <Link to="/">Početna</Link>
              </li>
              <li>
               <Link to="/meni">Meni</Link>
              </li>
              <li>
               <Link to="/narudzbe">Narudžbe</Link>
              </li>
              <li>
               <Link to="/cart">Korpa</Link>
              </li>
            </ul>
          </div>
          <div className={classes.col}>
            <ul>
              <li>
                <p>
                   066-473/319
                </p>
              </li>
              <li>
                <p>office@naziv.com</p>
              </li>
              <li>
                <p>brace jerkovic, 27.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col1}>
            <p>©2022 - Form  | All Right Reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
