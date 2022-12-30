import classes from "./CardOffer.module.css";
const CardOffer = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.src} alt={props.alt} />
      <div className={classes.textWrapping}>
        <h2 className={classes.title}>{props.title}</h2>
      </div>
    </div>
  );
};

export default CardOffer;
