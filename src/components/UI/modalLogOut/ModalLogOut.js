import Modal from "../modal/Modal";
import classes from "./ModalLogOut.module.css";
const ModalLogOut = (props) => {
  return (
    <Modal onClose={props.onHideModal}>
      <div className={classes.modal}>
        <div className={classes.headingModal}>
          <h2>Da li zelite da se odjavite?</h2>
        </div>
        <div className={classes.buttonModal}>
          <button onClick={props.LogOutHandler}>Da</button>
          <button onClick={props.onHideModal}>Ne</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalLogOut;
