import Modal from "../../UI/modal/Modal";
import classes from "./MenuFilter.module.css";
const MenuFilter = (props) => {
  return (
    <Modal onClose={props.onHideFilter}>
      <div className={classes.filterDiv}>
        <div>
          <h1 className={classes.heading}>Izaberi kategoriju:</h1>
          {Array.from(
            new Set(props.arrayMenu.map((item) => item.category))
          ).map((category) => (
            <div key={category} className={classes.categoryDiv}>
              <input
                type="checkbox"
                checked={props.selectedCategories.includes(category)}
                onChange={() => props.handleCategoryChange(category)}
              />
              {category}
            </div>
          ))}
        </div>
        <div>
          <h1 className={classes.heading}>Izaberi opseg cijene:</h1>
          <div className={classes.range}>
            <input
              type="number"
              value={props.underPrice}
              onChange={props.handlerUnderPrice}
            />
            <input
              type="number"
              value={props.overPrice}
              onChange={props.handlerOverPrice}
            />
            <label
              className={classes["toggler-wrapper"] + " " + classes["style-1"]}
            >
              <input
                type="checkbox"
                checked={props.checked}
                onChange={props.inRangeHandler}
              />
              <div className={classes["toggler-slider"]}>
                <div className={classes["toggler-knob"]}></div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className={classes.buttonFilter}>
        <button type="submit" onClick={props.filterMenu}>
          Filtriraj
        </button>
        <button type="submit" onClick={props.resetFilter}>
          Restartuj
        </button>
      </div>
    </Modal>
  );
};

export default MenuFilter;
