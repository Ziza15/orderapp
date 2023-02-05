import { useState } from "react";
import ModalOrderHistory from "../UI/modalOrderHistory/ModalOrderHistory";
import classes from "./OrderHistoryItem.module.css";

const OrederHistoryItem = (props) => {
  const [modalIsShowing, setModalIsShowing] = useState(false);

  const onShowModalHandler = () => {
    setModalIsShowing(true);
  };
  const onHideModalHandler = () => {
    setModalIsShowing(false);
  };
  return (
    <div className={classes.historyItems}>
      {modalIsShowing && (
        <ModalOrderHistory
          onHideModal={onHideModalHandler}
          name={props.name}
          address={props.address}
          postCode={props.postCode}
          tel={props.tel}
          items={props.items}
          date={props.date}
          price={props.price}
        />
      )}
      <div>
        <h2>
          Ukupna cijena: {props.price} RSD / {props.date}
          <span>h</span>
        </h2>
      </div>
      <div>
        <button onClick={onShowModalHandler}>Detaljnije</button>
      </div>
    </div>
  );
};

export default OrederHistoryItem;
