import { useState } from "react";
import Modal from "../../UI/modal/Modal";

const MenuFilter = (props) => {


  return (
    <Modal onClose={props.onHideFilter}>
      <div>
        <label>
          <input type="checkbox"  checked={props.isCheckedPizza}  onChange={props.handleChange} />
          Pizza
        </label>
        <label>
          <input type="checkbox" checked={props.isCheckedSendwich}  onChange={props.handleChange1}/>
          Sendvic
        </label>
        <label>
          <input type="checkbox" value="palacinke" />
          Palacinke
        </label>
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
