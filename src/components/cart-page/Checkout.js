import { useContext } from "react";
import AddCart from "../../store/add-cart";
import classes from "./Checkout.module.css";
import moment from "moment";
import { useAuth } from "../../store/AuthContext";
import useInput from "../../hooks/use-input";

const Checkout = (props) => {
  const ctx = useContext(AddCart);
  const {
    value: enteredName,
    hasEror: nameIsInvalid,
    valueInputHandler: nameInputHandler,
    inputBlurValidation: nameBlurHandler,
    isValid: nameIsValid,
    reset: resetName,
  } = useInput((value) => value.trim("") !== "");
  const {
    value: enteredTel,
    hasEror: telIsInvalid,
    valueInputHandler: telInputHandler,
    inputBlurValidation: telBlurHandler,
    isValid: telIsValid,
    reset: resetTel,
  } = useInput((value) => value.length === 9 || value.length === 10);
  const {
    value: enteredAddress,
    hasEror: addressIsInvalid,
    valueInputHandler: addressInputHandler,
    inputBlurValidation: addressBlurHandler,
    isValid: addressIsValid,
    reset: resetAddress,
  } = useInput((value) => value.trim("") !== "");
  const {
    value: enteredPostCode,
    hasEror: postCodeIsInvalid,
    valueInputHandler: postCodeInputHandler,
    inputBlurValidation: postCodeBlurHandler,
    isValid: postCodeIsValid,
    reset: resetPostCode,
  } = useInput((value) => value.length === 5);
  const currentDate = moment().format("DD. MM. YYYY. - HH:mm");
  const { currentUser } = useAuth();
  const name = currentUser.email.split("@")[0];

  async function addOrdering(order) {
    const response = await fetch(
      `https://react-base-974e1-default-rtdb.firebaseio.com/${name}.json`,
      {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  // let formIsValid = false;
  // if (nameIsValid && telIsValid && addressIsValid && postCodeIsValid) {
  //   console.log("Form is valid");
  //   formIsValid = true;
  // }

  const submitHandle = (e) => {
    e.preventDefault();
    if (!nameIsValid || !telIsValid || !addressIsValid || !postCodeIsValid) {
      console.log("Form is invalid");
      return;
    }

    console.log(name);
    const order = {
      name: enteredName,
      tel: enteredTel,
      postCode: enteredPostCode,
      address: enteredAddress,
      date: currentDate,
      price: ctx.totalPrice,
      items: ctx.cartItems,
    };
    addOrdering(order);
    resetName();
    resetAddress();
    resetPostCode();
    resetTel();
    props.completeOrdering();
    console.log(order);
  };

  const nameClassInvalid = nameIsInvalid ? "invalid" : "form-control";
  const telClassInvalid = telIsInvalid ? "invalid" : "form-control";
  const postCodeClassInvalid = postCodeIsInvalid ? "invalid" : "form-control";
  const addressClassInvalid = addressIsInvalid ? "invalid" : "form-control";

  return (
    <>
      <h2 className={classes.headingOrder}>Završite svoju porudžbinu</h2>
      <form className={classes.formOrder} onSubmit={submitHandle}>
        <div className={classes.row}>
          <input
            className={classes[nameClassInvalid]}
            type="text"
            onChange={nameInputHandler}
            value={enteredName}
            onBlur={nameBlurHandler}
            placeholder="Unesite Vaše ime i prezime"
            required
          />
          <input
            className={classes[telClassInvalid]}
            type="number"
            onChange={telInputHandler}
            value={enteredTel}
            onBlur={telBlurHandler}
            placeholder="Unesite Vaš broj telefona"
            required
          />
          <input
            className={classes[addressClassInvalid]}
            onChange={addressInputHandler}
            value={enteredAddress}
            onBlur={addressBlurHandler}
            type="text"
            placeholder="Unesite Vašu adresu"
            required
          />
          <input
            type="number"
            className={classes[postCodeClassInvalid]}
            onChange={postCodeInputHandler}
            value={enteredPostCode}
            onBlur={postCodeBlurHandler}
            placeholder="Unesite Vaš poštanski broj"
            required
          />
        </div>
        <div className={classes.cartDisplay}>
          <div>
            <p>Ukupna cijena:</p>
            <p>{ctx.totalPrice} RSD</p>
          </div>
          <div>
            <button onClick={props.backToCart}>Nazad</button>
            <button  type="submit">Potvrdi</button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Checkout;
