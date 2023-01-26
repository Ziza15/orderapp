import { Link } from "react-router-dom";
import { useAuth } from "../../../store/AuthContext";
import classes from "./HeroSection.module.css";

const HeroSection = (props) => {
  const { currentUser } = useAuth()
  return (
    <section>
      <div className={classes.overlay}></div>
      <div className={classes.background}></div>
      <div className={classes.centerDiv}>
        <div className={`${classes.heading}`}>
          <h1>{currentUser.email}, dobrodošao</h1>
          <h3>Pogledajte meni i izaberite jelo po vašem ukusu</h3>
          <button type="button">
            <Link to="/meni">
            Pogledajte ponudu
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
