import React, { useRef, useState } from "react";
import classes from "./Signup.module.css";
import { useAuth } from "../../store/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmeRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function submitHandle(e) {
    e.preventDefault();
    if (passwordConfirmeRef.current.value !== passwordRef.current.value) {
      return setError("Lozink nisu jednake");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);

      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Ova email adresa se već koristi, izaberite drugu!");
      } else {
        setError("Imate problema sa prijavljivanje, pokusajte ponovo!");
      }
    }
    setLoading(false);
  }

  return (
    <>
      <div className={classes.centarDiv}>
        <div className={classes.card}>
          <h2>Napravi nalog</h2>
          {error && <p>{error}</p>}
          <form className={classes.form} onSubmit={submitHandle}>
            <input
              type="email"
              ref={emailRef}
              placeholder="Unesite Vašu email adresu"
              required
            />
            <input
              type="password"
              ref={passwordRef}
              placeholder="Unesite Vašu šifru"
              required
            />
            <input
              type="password"
              ref={passwordConfirmeRef}
              placeholder="Potvrdite Vašu unesenu šifru"
              required
            />
            <button disabled={loading} type="submit">
              {" "}
              Registruj se
            </button>
          </form>
          <div>
            <p>
              Već imate nalog?{" "}
              <span>
                <Link to="/signin">Prijavite se!</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
