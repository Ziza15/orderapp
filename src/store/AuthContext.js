import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLogading] = useState(false);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email, password)
  }
  const logout=()=>{
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLogading(false);
    });

    return unsubscriber;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
