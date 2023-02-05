import Modal from "../modal/Modal";
import classes from "./ModalOrderHistory.module.css";
const ModalOrderHistory = (props) => {
  const arr = props.items.map((item) => {
    return (
      <li key={item.id}>
        {item.name} <span>x{item.amount}</span>
      </li>
    );
  });
  return (
    <Modal onClose={props.onHideModal}>
      <div className={classes.MainDiv}>
        <div className={classes.FirstDiv}>
          <div>
            <h2 className={classes.heading}>Porudžbina: </h2>
            <ul> {arr}</ul>
          </div>
          <div>
            <h2 className={classes.heading}>Informacije o poručiocu:</h2>
            <p>
              Ime: <span>{props.name}</span>
            </p>
            <p>
              Adresa: <span>{props.address}</span>
            </p>
            <p>
              Poštanski broj: <span>{props.postCode}</span>
            </p>
            <p>
              Broj telefona: <span>{props.tel}</span>
            </p>
          </div>
        </div>
        <div className={classes.SecondDiv}>
          <p>Datum porudžbine: <span className={classes.textLower}>{props.date}h</span></p>
          <p>Ukupna cijena: <span>{props.price} RSD</span></p>
        </div>
      </div>
    </Modal>
  );
};

export default ModalOrderHistory;
