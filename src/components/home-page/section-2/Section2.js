import { Link } from "react-router-dom";
import classes from "./Section2.module.css";

const Section2 = () => {
  return (
    <section className={classes.section}>
      <div className={classes.overlay}></div>
      <div className={classes.background}></div>
      <div className={classes.content}>
        <div className={classes.headingPosition}>
          <h2>
            Gladan si!? <br /> Ali nemate vremena da spremate hranu?
            <br /> Na pravom ste mjestu!
          </h2>
        </div>
        <div className={classes.buttonPosition}>
          <button type="button">
            <Link to="/meni">
              <span>Narucite odmah</span>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section2;
