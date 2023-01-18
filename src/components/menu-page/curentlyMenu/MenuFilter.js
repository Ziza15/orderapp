import Modal from "../../UI/modal/Modal";

const MenuFilter = (props) => {
    const handler =(e)=>{
        console.log(e.target.value)
    }
  return (
    <Modal onClose={props.onHideCart}>
      <div>
        <label>
          <input type="checkbox" value="pizza"/>
          Pizza
        </label>
        <label>
          <input type="checkbox" value="sendvic"/>
          Sendvic      
        </label>
        <label>
          <input type="checkbox" value="palacinke"/>
          Palacinke
        </label>
      </div>
      <button onClick={handler}>Filtriraj</button>
    </Modal>
  );
};

export default MenuFilter;
