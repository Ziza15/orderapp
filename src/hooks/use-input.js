import { useState } from "react";

const useInput = (inputValidation) => {
  const [enteredValue, setEnteredVaule] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const valueIsValid = inputValidation(enteredValue);
  const hasEror = !valueIsValid && inputTouched;

  const valueInputHandler = (e) => {
    setEnteredVaule(e.target.value);
  };
  const inputBlurValidation = (e) => {
    setInputTouched(true);
  };

  const reset = () => {
    setEnteredVaule("");
    setInputTouched(false);
  };

  return  {
    value: enteredValue,
    isValid: valueIsValid,
    reset,
    valueInputHandler,
    inputBlurValidation, 
    hasEror,
  }
};

export default useInput;
