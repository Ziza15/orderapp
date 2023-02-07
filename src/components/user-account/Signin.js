import React, { useRef, useState } from "react";
import classes from "./Signup.module.css";
import { useAuth } from "../../store/AuthContext";
import { Link, useNavigate } from "react-router-dom";
const Signin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()



  async function submitHandle(e) {
    e.preventDefault();
    
    try {
      setError("");
      setLoading(true);
      const user = await login(emailRef.current.value, passwordRef.current.value);
      localStorage.setItem("idToken", user.idToken);
      navigate("/")
    } catch {
      setError("Greska pri prijavljivanju");
    }
    setLoading(false);
  }

  return (
    <>
      <div className={classes.centarDiv}>
        <div className={classes.card}>
          <h2>Prijavite se</h2>
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
            <button disabled={loading} type="submit">
              Prijavite se
            </button>
          </form>
          <div>
            <p>
              Nemate nalog? <span><Link to="/signup">Registrujte se!</Link></span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
