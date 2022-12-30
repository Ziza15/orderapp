import classes from "./Footer.module.css";
import LogoV2 from "../../../assets/LogoV2.png";
import phone from "../../../assets/phone.svg";

const Footer = (props) => {
  return (
    <section className={classes.footer}>
      <div className={props.className}>
        <div className={classes.row}>
          <div className={classes.col}>
            <div>
              <img src={LogoV2} alt={"logo"} />
            </div>
          </div>
          <div className={classes.col}>
            <ul>
              <li>
                <a href={"#s"}>Početna</a>
              </li>
              <li>
                <a href={"#s"}>Meni</a>
              </li>
              <li>
                <a href={"#s"}>Narudžbe</a>
              </li>
              <li>
                <a href={"#s"}>Korpa</a>
              </li>
            </ul>
          </div>
          <div className={classes.col}>
            <ul>
              <li>
                <p>
                  {/* <img src={phone} alt={"phone"} /> */}
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
