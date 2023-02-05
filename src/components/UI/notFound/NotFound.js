import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.notFoundDiv}>
      <h1>404</h1>
      <h2>Stranica nije pronađena, <Link to="/"> vratite se na početnu stranicu</Link></h2>
    </div>
  );
};

export default NotFound;
