import classes from "./App.module.css";
import React, { useContext, useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import PageContext from "./store/page-context";
import CartPage from "./pages/CartPage";
import AddCart from "./store/add-cart";

let cartItems =[];

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  
  const setPageNumber1 = () => {
    setPageNumber(1);
  };
  const setPageNumber2 = () => {
    setPageNumber(2);
  };
  const setPageNumber4 = () => {
    setPageNumber(4);
  };
  return (
    <React.Fragment>
      <PageContext.Provider
        value={{
          page: pageNumber,
          setPage1: setPageNumber1,
          setPage2: setPageNumber2,
          setPage4: setPageNumber4,
        }}
      >
        <AddCart.Provider value={{cartItems:cartItems}}>
          {pageNumber === 1 && <HomePage />}
          {pageNumber === 2 && <MenuPage />}
          {pageNumber === 4 && <CartPage />}
        </AddCart.Provider>
      </PageContext.Provider >
    </React.Fragment>
  );
}

export default App;
