import classes from "./CompleteOrdering.module.css"
import img from "../../assets/complete.svg"
const CompleteOrdering = () => {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.centerPosition}>
        <div className={classes.completeOrdering}>
          <img src={img} alt="Porudzba kompletirana" />
        </div>
        <div>
          <p>Vaša porudžbina je uspješno kreirana</p>
        </div>
      </div>
    </div>
  );
};

export default CompleteOrdering;
