import { useEffect, useState } from "react";
import AddCart from "./add-cart";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartIsEmpty, setCartIsEmpty]= useState(false)

  const addItemsToCartHandler = (item) => {
    cartItems.push(item);
    setCartIsEmpty(true)
  };

  let price = 0;
  cartItems.map((item) => {
    return (price = price + item.price * item.amount);
  });

  useEffect(() => {
    setTotalPrice(price);
  }, [price]);

  const resetItemsHandler = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

 const updateTotalPrice = () => {
   cartItems.map((item) => {
      return (price = price + item.price * item.amount);
    });
    setTotalPrice(price);
  };

  const removeItemHandler = (id) => {
    cartItems.forEach((item) => {
      if (id === item.id) {
        console.log(id);

        setCartItems(cartItems.filter((idItem) => idItem.id !== item.id));
      }
      console.log(cartItems);
    });
  };
  useEffect(() => {
    if (cartItems.length> 0) {
        setCartIsEmpty(true);
    } else if (cartItems.length === 0) {
        setCartIsEmpty(false);
    }
  }, [cartItems, cartIsEmpty]);



  const cartContext = {
    cartItems: cartItems,
    totalPrice: totalPrice,
    IsEmpty:cartIsEmpty,
    addItemsToCart: addItemsToCartHandler,
    resetCart: resetItemsHandler, 
    updateTotalPrice:updateTotalPrice,
    removeItem:removeItemHandler,
  };

  return (
    <AddCart.Provider value={cartContext}>{props.children}</AddCart.Provider>
  );
};

export default CartProvider;
