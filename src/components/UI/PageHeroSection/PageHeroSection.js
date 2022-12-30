import classes from './PageHeroSection.module.css'
const PageHeroSection = (props) => {
  return (
    <section>
      <div className={classes.overlay}></div>
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${props.img}) `}}
      ></div>
      <div className={classes.centerDiv}>
        <div className={`${classes.heading}`}>
          <h1>{props.title}</h1>
        </div>
      </div>
    </section>

  );
};

export default PageHeroSection;
