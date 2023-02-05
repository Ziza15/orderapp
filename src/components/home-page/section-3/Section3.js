import classes from "./Section3.module.css";
import logo from "../../../assets/LogoBig.svg";

const Section3 = (props) => {
  return (
    <section className={`${props.className}`}>
      <div className={classes.row}>
        <div className={classes.col1}>
          <div>
            <img src={logo} alt={"logo"} />
          </div>
          <h2>Naziv kompanije</h2>
        </div>
        <div className={classes.col2}>
          <div className={classes.line}></div>
        </div>
        <div className={classes.col3}>
          <h2>O nama</h2>
          <div className={classes.textWrapper}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
