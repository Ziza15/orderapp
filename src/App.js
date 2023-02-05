import React from "react";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import CartProvider from "./store/AddCartProvider";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/UI/notFound/NotFound";
import Signup from "./components/user-account/Signup";
import { AuthProvider } from "./store/AuthContext";
import Signin from "./components/user-account/Signin";
import PrivateRoutes from "./components/user-account/PrivateRoutes";
import OrderHistoryPage from "./pages/OrderHistoryPage";
function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <CartProvider>
         
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/meni" element={<MenuPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/narudzbe" element={<OrderHistoryPage />} />

              </Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          
        </CartProvider>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
